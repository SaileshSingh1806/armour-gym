# ARMOUR 24-7 GYM — Media Manager

Admin dashboard: `/admin/media` (redirects to `/admin/login` without a valid session).

## Required private Vercel settings

Already configured by gym management:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Additional settings needed for admin login:

- `MEDIA_ADMIN_EMAIL`: the owner's admin email (lowercase).
- `MEDIA_ADMIN_PASSWORD_HASH`: a salted scrypt password hash.
- `MEDIA_ADMIN_SESSION_SECRET`: a random signing secret (32+ characters).

**Never send Cloudinary API secrets or admin credentials through chat, commit them, or expose them under a `NEXT_PUBLIC_` prefix.**

Generate hash and session secret on your own computer:

```powershell
node scripts/setup-media-admin.mjs
```

The script accepts a password without echoing it to your terminal. Paste only the output values into **Vercel → Project → Settings → Environment Variables**. Select **Production and Preview** as appropriate. Redeploy after changing variables.

## Upload workflow

1. Visit `/admin/login` and log in.
2. Choose Home, Story, Programs, Gallery, About or Contact.
3. Pick an individual section image (including **Studios**: Yoga, Zumba, HYROX, Open Terrace).
4. Upload original high-quality JPG, PNG or WebP up to 10 MB.
5. Select the draft thumbnail and adjust horizontal/vertical focal position.
6. Open **Preview on website** to see the draft inside the actual Hero, Story, Programs or Gallery layout before publishing (About/Contact use a representative section preview).
7. Choose **Publish this image**. The existing published Cloudinary photo is moved into a versioned history path.
8. Select a history photo and choose **Restore and publish this version** to roll back.
9. Use **Use original photo** to revert entirely to the website's built-in photo, without losing the Cloudinary version.

The original logo `/armour-logo.png` is **not in the editable slots**.

Photos originally included in the website are always available as fallbacks if a slot has never been published, Cloudinary is unavailable or the first setup is incomplete.

## Implementation notes

- Published images use fixed Cloudinary public IDs (`armour-media/live/<slot>`).
- Draft uploads use unique IDs and do not appear publicly until published.
- Upload is a short-lived **signed browser-to-Cloudinary request**. The Cloudinary API secret remains server-only; original photo bytes never pass through Vercel functions.
- Replaced assets are renamed under `armour-media/history/<slot>/...`; those versions can be restored.
- CSS focal point is persisted in Cloudinary image context.
- Versioned delivery URLs allow the Next.js image optimizer to see new content.
- Public image mappings are cached to conserve Cloudinary Admin API quota and invalidated after a publish/restore.
- No database or GitHub commit is needed for routine uploads or publishing.
- The business's logo, plan rates, payment endpoints, and footer content are untouched.

## Security and operational requirements

- Upload, publish, history and inventory routes enforce signed HttpOnly, Secure-in-production, SameSite=Strict sessions.
- All mutations verify same-origin requests.
- Admin password is checked using a salted scrypt hash, never stored as plaintext in the repository.
- Files are limited to JPEG/PNG/WebP, 10 MB and checked against common file signatures before server-side signed upload.
- Configure a **Vercel WAF rate-limit rule** for `/api/admin/media/login` to block password guessing. Rate-limiting is not provided by this app code itself.
- For multi-admin or audited permissions, migrate to a managed identity provider.
- Since assets are preserved through Cloudinary rename, independent Cloudinary backups are still recommended.
- Verify published images and restoration with one test slot on a Vercel preview before using production.
- Cache invalidation and Cloudinary API propagation may mean a brief delay until all site visitors see the new image.

## Image quality recommendations

| Slot | Recommended source |
|------|--------------------|
| Hero | Landscape 2400 × 1400 or higher |
| Story/Gallery | Landscape 1600 × 1200 or higher |
| Programs | Portrait 1200 × 1600 or higher |
| About/Contact | 1600 px+ on the long edge |

Use original camera files. Avoid WhatsApp compressed uploads and very small photographs. Cropping changes only the visible framing; it does not upscale the underlying image.

## Beyond the Gym Floor showcase

A cinematic, 4-card homepage section after Choose Your Grind:
- Zumba Studio — large feature card
- Yoga Studio — supporting card
- HYROX Training — supporting card
- Open Terrace Workout — large feature card

Each card uses independently animated image parallax via Framer Motion with reduced-motion support. The Studio tab offers four new editable Media Manager IDs:
`special-zumba`, `special-yoga`, `special-hyrox`, `special-terrace`.

Before publishing your original HD photos, the cards show lightweight dummy images already in `public/images/`. The original local gym photos have been removed from the repository's **current tree**; the official ARMOUR logo and all previously uploaded Cloudinary assets remain intact. Existing Cloudinary `armour-media/live/` IDs were not changed.

**Important:** Git history still contains previously committed image bytes. A normal deletion does not erase them from past commits. Permanently purging Git history requires a separate carefully planned repository rewrite.

Updated existing Media Manager fallback slots point to dummy images, not deleted files. A Cloudinary-published image always takes precedence over its local fallback. The original image restore button now restores the dummy fallback.
