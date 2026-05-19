import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { SERVICES } from "../../data/site";

const service = SERVICES.find((s) => s.slug === "gutters")!;

export const metadata: Metadata = {
  title: `${service.title} | Stone Ranch Roofing`,
  description: service.description,
};

export default function Page() {
  return <ServicePage service={service} />;
}
