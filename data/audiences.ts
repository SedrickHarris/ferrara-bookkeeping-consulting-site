export type AudienceGroupSlug =
  | "home-services-trades"
  | "construction-skilled-trades"
  | "transportation-logistics"
  | "real-estate-property-services"
  | "professional-personal-services"
  | "specialty-service-businesses";

export type AudienceGroup = {
  slug: AudienceGroupSlug;
  name: string;
};

export type Audience = {
  slug: string;
  name: string;
  group: AudienceGroupSlug;
};

export const audienceGroups: readonly AudienceGroup[] = [
  { slug: "home-services-trades", name: "Home services and trades" },
  { slug: "construction-skilled-trades", name: "Construction and skilled trades" },
  { slug: "transportation-logistics", name: "Transportation and logistics" },
  { slug: "real-estate-property-services", name: "Real estate and property services" },
  { slug: "professional-personal-services", name: "Professional and personal services" },
  { slug: "specialty-service-businesses", name: "Specialty service businesses" },
];

// Source of truth: docs/ferrara-bookkeeping-site-build-outline.md, "Audience inventory".
export const audiences: readonly Audience[] = [
  // home-services-trades (1–14)
  { slug: "hvac-companies", name: "HVAC and air conditioning/heating companies", group: "home-services-trades" },
  { slug: "plumbers", name: "Plumbing businesses", group: "home-services-trades" },
  { slug: "electricians", name: "Electricians", group: "home-services-trades" },
  { slug: "painters", name: "Residential and commercial painters", group: "home-services-trades" },
  { slug: "flooring-installers", name: "Flooring installers", group: "home-services-trades" },
  { slug: "drywall-contractors", name: "Drywall contractors", group: "home-services-trades" },
  { slug: "handyman-services", name: "Handyman services", group: "home-services-trades" },
  { slug: "garage-door-repair-companies", name: "Garage door repair companies", group: "home-services-trades" },
  { slug: "window-cleaning-companies", name: "Window cleaning companies", group: "home-services-trades" },
  { slug: "pool-service-companies", name: "Pool service and maintenance companies", group: "home-services-trades" },
  { slug: "landscaping-lawn-care-businesses", name: "Landscaping and lawn care businesses", group: "home-services-trades" },
  { slug: "pest-control-companies", name: "Pest control companies", group: "home-services-trades" },
  { slug: "solar-installation-companies", name: "Solar installation companies", group: "home-services-trades" },
  { slug: "water-treatment-softener-companies", name: "Water treatment and softener companies", group: "home-services-trades" },
  // construction-skilled-trades (15–21)
  { slug: "general-contractors", name: "General contractors", group: "construction-skilled-trades" },
  { slug: "roofing-companies", name: "Roofing companies", group: "construction-skilled-trades" },
  { slug: "concrete-contractors", name: "Concrete contractors", group: "construction-skilled-trades" },
  { slug: "tile-stone-installers", name: "Tile and stone installers", group: "construction-skilled-trades" },
  { slug: "home-remodeling-companies", name: "Home remodeling companies", group: "construction-skilled-trades" },
  { slug: "carpentry-woodworking-businesses", name: "Carpentry and woodworking businesses", group: "construction-skilled-trades" },
  { slug: "welding-fabrication-shops", name: "Welding and fabrication shops", group: "construction-skilled-trades" },
  // transportation-logistics (22–26)
  { slug: "owner-operators", name: "Truck drivers / owner-operators", group: "transportation-logistics" },
  { slug: "small-trucking-companies", name: "Small trucking companies", group: "transportation-logistics" },
  { slug: "hotshot-trucking-companies", name: "Hotshot trucking companies", group: "transportation-logistics" },
  { slug: "courier-delivery-services", name: "Courier and delivery services", group: "transportation-logistics" },
  { slug: "moving-companies", name: "Moving companies", group: "transportation-logistics" },
  // real-estate-property-services (27–31)
  { slug: "real-estate-investors", name: "Real estate investors", group: "real-estate-property-services" },
  { slug: "rental-property-owners", name: "Rental property owners", group: "real-estate-property-services" },
  { slug: "property-management-companies", name: "Property management companies", group: "real-estate-property-services" },
  { slug: "short-term-rental-hosts", name: "Short-term rental hosts", group: "real-estate-property-services" },
  { slug: "home-inspection-companies", name: "Home inspection companies", group: "real-estate-property-services" },
  // professional-personal-services (32–38)
  { slug: "wellness-providers", name: "Wellness providers", group: "professional-personal-services" },
  { slug: "consultants-coaches", name: "Consultants and coaches", group: "professional-personal-services" },
  { slug: "small-tech-startups", name: "Small tech startups", group: "professional-personal-services" },
  { slug: "cleaning-companies", name: "Residential and commercial cleaning companies", group: "professional-personal-services" },
  { slug: "mobile-car-detailers", name: "Mobile car detailers", group: "professional-personal-services" },
  { slug: "security-guard-companies", name: "Security guard companies", group: "professional-personal-services" },
  { slug: "notaries-mobile-signing-agents", name: "Notaries and mobile signing agents", group: "professional-personal-services" },
  // specialty-service-businesses (39–44)
  { slug: "locksmiths", name: "Locksmiths", group: "specialty-service-businesses" },
  { slug: "appliance-repair-technicians", name: "Appliance repair technicians", group: "specialty-service-businesses" },
  { slug: "irrigation-specialists", name: "Irrigation specialists", group: "specialty-service-businesses" },
  { slug: "fence-installers", name: "Fence installers", group: "specialty-service-businesses" },
  { slug: "audio-visual-installers", name: "Audio/visual installers", group: "specialty-service-businesses" },
  { slug: "small-equipment-repair-businesses", name: "Small equipment repair businesses", group: "specialty-service-businesses" },
];
