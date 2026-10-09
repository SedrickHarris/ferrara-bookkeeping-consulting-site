import { audiences } from "./audiences.ts";
import { services } from "./services.ts";

// A registry entry is NOT approval to publish. Only "approved" or "published"
// entries may be routed/indexed, and only after the owner approves the content.
export type PairingStatus = "planned" | "drafted" | "approved" | "published";

export type AudienceServicePage = {
  audienceSlug: string;
  serviceSlug: string;
  groupSlug: string;
  path: string;
  contentPath: string;
  status: PairingStatus;
};

export const audienceServicePages: readonly AudienceServicePage[] = audiences.flatMap(
  (audience) =>
    services.map(
      (service): AudienceServicePage => ({
        audienceSlug: audience.slug,
        serviceSlug: service.slug,
        groupSlug: audience.group,
        path: `/industries/${audience.slug}/${service.slug}/`,
        contentPath: `content/audience-services/${audience.slug}/${service.slug}.md`,
        status: "planned",
      }),
    ),
);

export const releasablePairings = audienceServicePages.filter(
  (p) => p.status === "approved" || p.status === "published",
);
