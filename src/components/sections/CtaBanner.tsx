import Link from "next/link";

export default function CtaBanner() {
  const href_ios = process.env.NEXT_PUBLIC_IOS_APP_URL ?? "#";
  const href_android = process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? "#";
  return (
    <section
      className="py-24 bg-cream"
      data-purpose="cta-section"
      id="download"
    >
      <div className="container mx-auto px-6">
        <div className="bg-burgundy rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Ornament — dot pattern */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <h2 className="font-serif text-5xl md:text-6xl mb-8 relative z-10">
            Start your collection today.
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
            Join thousands of wine lovers tracking their journey. Available for
            free with premium features for connoisseurs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10 w-full max-w-2xl mx-auto">
            <Link
              href={href_ios as string} 
              className="w-full sm:w-[260px] inline-flex items-center justify-center px-8 py-4 bg-white text-burgundy rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Download for iOS
            </Link>
            <Link
              href={href_android as string}
              className="w-full sm:w-[260px] inline-flex items-center justify-center px-8 py-4 glass-effect text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Download for Android
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
