import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Editorial from "@/components/sections/Editorial";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* FeaturedProducts — coming soon */}
      <MarqueeStrip />
      <Editorial />
    </main>
  );
}
