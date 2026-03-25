import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Editorial from "@/components/sections/Editorial";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <FeaturedProducts />
      <Editorial />
    </main>
  );
}
