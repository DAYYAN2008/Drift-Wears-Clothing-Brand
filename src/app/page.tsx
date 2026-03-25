import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Spacer so scrolling is demonstrable */}
      <section className="flex h-screen items-center justify-center bg-[var(--color-off-white)]">
        <p className="text-2xl font-light tracking-wide text-[var(--color-black)]">
          Content sections coming soon&hellip;
        </p>
      </section>
    </main>
  );
}
