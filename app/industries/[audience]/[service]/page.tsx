import { notFound } from "next/navigation";
import { PlaceholderPage } from "../../../../components/ui/PlaceholderPage";
import { releasablePairings } from "../../../../data/audienceServicePages";

export const dynamicParams = false;

// Only owner-approved pairings are generated. All pairings start as "planned",
// so this returns no params and every matrix URL 404s until approval.
export function generateStaticParams() {
  return releasablePairings.map((p) => ({ audience: p.audienceSlug, service: p.serviceSlug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ audience: string; service: string }>;
}) {
  const { audience, service } = await params;
  const page = releasablePairings.find((p) => p.audienceSlug === audience && p.serviceSlug === service);
  if (!page) notFound();
  return <PlaceholderPage route={page.path} />;
}
