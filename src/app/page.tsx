import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Editorial from "@/components/sections/Editorial";

export const metadata: Metadata = {
  title: "Drift Wears — Premium Streetwear",
  description:
    "Shop the latest streetwear drops from Drift Wears. New collections, limited editions, and style-defining essentials.",
  openGraph: {
    title: "Drift Wears — Premium Streetwear | New Collection Live",
    description:
      "Shop the latest streetwear drops from Drift Wears. New collections, limited editions, and style-defining essentials.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedProducts />
      <Editorial />
    </>
  );
}
