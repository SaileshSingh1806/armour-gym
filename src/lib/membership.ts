/**
 * Server-owned membership amounts used to validate payment requests.
 * Keep these values aligned with the published Pricing page until a
 * centralized pricing service is introduced.
 */
export const membershipPlans = [
  { id: "demo", label: "Demo Workout Session (₹500)", price: 500 },
  { id: "1-month", label: "1 Month Membership (₹3,500)", price: 3500 },
  { id: "3-month", label: "3 Months Membership (₹6,500)", price: 6500 },
  { id: "6-month", label: "6 Months Membership (₹9,000)", price: 9000 },
  { id: "12-month", label: "12 Months Membership (₹15,000)", price: 15000 },
] as const;

export const additionalInterests = [
  "1-on-1 Personal Training Enquiry",
  "General Membership Enquiry",
] as const;

export function findMembershipPlan(id: unknown) {
  return membershipPlans.find((plan) => plan.id === id);
}
