import { notFound } from "next/navigation";
import { PlaceholderPage } from "../../../components/ui/PlaceholderPage";
import { services } from "../../../data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  if (!services.some((s) => s.slug === service)) notFound();
  return <PlaceholderPage route={`/services/${service}/`} />;
}
