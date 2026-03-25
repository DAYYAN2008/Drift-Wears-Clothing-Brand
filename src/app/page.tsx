import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Editorial from "@/components/sections/Editorial";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <FeaturedProducts />
      <Editorial />
      <Newsletter />
    </main>
  );
}
