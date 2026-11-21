import { randomBytes, scryptSync } from "node:crypto";
import process from "node:process";

/**
 * Run locally with Node 22:
 * Interactive: node scripts/setup-media-admin.mjs
 * Or with argument: node scripts/setup-media-admin.mjs "YourStrongPassword123"
 *
 * Password is never committed or stored in git.
 * Paste ONLY the generated hash and session secret into Vercel env settings.
 */
async function hiddenPassword() {
  if (process.argv[2]) {
    const password = process.argv[2];
    if (password.length < 12) throw new Error("Password must be at least 12 characters long.");
    return password;
  }

  if (!process.stdin.isTTY || !process.stdin.setRawMode) {
    throw new Error("Run this command in an interactive local terminal, or pass the password as an argument: node scripts/setup-media-admin.mjs \"YourPassword123\"");
  }
  process.stdout.write("Choose a strong admin password (12+ characters): ");
  process.stdin.setRawMode(true);
  process.stdin.resume();
  let password = "";
  try {
    await new Promise((resolve, reject) => {
      const onData = (buf) => {
        for (const char of buf.toString()) {
          if (char === "\r" || char === "\n") {
            process.stdin.off("data", onData);
            resolve();
            return;
          }
          if (char === "\u0003") {
            process.stdin.off("data", onData);
            reject(new Error("Cancelled"));
            return;
          }
          if (char === "\u007f" || char === "\b") {
            password = password.slice(0, -1);
          } else if (char >= " " && password.length < 256) {
            password += char;
          }
        }
      };
      process.stdin.on("data", onData);
    });
  } finally {
    process.stdin.setRawMode(false);
    process.stdin.pause();
    process.stdout.write("\n");
  }
  if (password.length < 12) throw new Error("Password must be at least 12 characters long.");
  return password;
}

try {
  const password = await hiddenPassword();
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  const secret = randomBytes(48).toString("base64url");
  console.log("\nAdd these PRIVATE Vercel environment variables:");
  console.log("MEDIA_ADMIN_PASSWORD_HASH=scrypt$" + salt.toString("hex") + "$" + hash.toString("hex"));
  console.log("MEDIA_ADMIN_SESSION_SECRET=" + secret);
  console.log("\nAlso add MEDIA_ADMIN_EMAIL with your chosen email.");
  console.log("Never add a NEXT_PUBLIC_ prefix, commit these values or share them in chat.");
} catch (error) {
  console.error(error instanceof Error ? error.message : "Could not generate credentials");
  process.exitCode = 1;
}
