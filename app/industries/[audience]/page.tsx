import { notFound } from "next/navigation";
import { PlaceholderPage } from "../../../components/ui/PlaceholderPage";
import { audienceGroups } from "../../../data/audiences";

export const dynamicParams = false;

// The six audience group pages. Individual audience slugs exist only as the
// first segment of audience x service routes.
export function generateStaticParams() {
  return audienceGroups.map((g) => ({ audience: g.slug }));
}

export default async function Page({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  if (!audienceGroups.some((g) => g.slug === audience)) notFound();
  return <PlaceholderPage route={`/industries/${audience}/`} />;
}
