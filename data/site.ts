// Confirmed business facts only. Everything else is a TODO for the owner.
export const site = {
  name: "Ferrara Bookkeeping & Consulting",
  experience: "20+ years",
  hours: "Monday–Friday, 8 a.m.–5 p.m. Pacific",
  languages: ["English", "Spanish"],
  consultation: "Free 30-minute consultation",
  phone: "(725) 255-2535",
  serviceArea: {
    local: "Las Vegas",
    remote: "Nationwide",
  },
  // TODO: owner to confirm production URL, booking URL, form destination, email.
} as const;
