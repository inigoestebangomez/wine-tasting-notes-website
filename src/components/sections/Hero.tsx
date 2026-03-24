import Image from "next/image";
import AppStoreButton from "@/components/ui/AppStoreButton";
import PlayStoreButton from "@/components/ui/PlayStoreButton";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream"
      data-purpose="hero-section"
      id="hero"
    >
      {/* Abstract Background Shape — desktop only */}
      <div className="absolute -right-20 top-0 w-1/2 h-full bg-burgundy/5 rounded-l-full -z-10 hidden lg:block" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left Column: Text ── */}
        <div className="space-y-8" id="hero-content">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight text-burgundy">
            Capture every note,{" "}
            <br />
            <span className="italic font-light">remember every bottle.</span>
          </h1>

          <p className="text-xl text-charcoal/70 max-w-lg leading-relaxed">
            Designed for speed and precision, this app provides a structured, professional framework to record your tastings using a systematic approach.
          </p>

          {/* App Store CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>

        {/* ── Right Column: Image ── */}
        <div className="relative" id="hero-image">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
            <Image
              src="/Hero-Wine-Tasting-Notes.png"
              alt="Elegant wine tasting experience"
              width={640}
              height={480}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Decorative blur blobs */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-burgundy rounded-full mix-blend-multiply blur-3xl opacity-20" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-burgundy-light rounded-full mix-blend-multiply blur-3xl opacity-10" />
        </div>
      </div>
    </section>
  );
}
