export default function AppPreview() {
  return (
    <section
      className="py-24 bg-charcoal text-white overflow-hidden"
      data-purpose="mockup-section"
      id="preview"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Phone Mockup */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative w-[300px] h-[600px] bg-charcoal-light rounded-[3rem] border-8 border-white/10 shadow-2xl p-4 overflow-hidden">
            <div className="w-full h-full bg-cream rounded-[2rem] overflow-hidden flex flex-col">
              {/* Mock Interface Header
              <div className="h-20 bg-burgundy p-6 flex justify-between items-end">
                <span className="text-white font-serif text-lg">My Cellar</span>
                <div className="w-8 h-8 bg-white/20 rounded-full" />
                </div> */}

                <img src="/home-wine-tasting-notes.png" alt="Wine Tasting Notes App" width={640} height={480} className="w-full h-auto object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
              {/* Mock Interface Content */}
              <div className="p-4 space-y-4">
                {/* Wine Item 1 */}
                {/* <div className="h-32 bg-burgundy/5 rounded-xl p-3 flex gap-4">
                  <div className="w-16 h-full bg-burgundy/20 rounded-lg" />
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 w-3/4 bg-burgundy/20 rounded" />
                    <div className="h-3 w-1/2 bg-burgundy/10 rounded" />
                    <div className="h-8 w-24 bg-burgundy rounded-full" />
                  </div>
                </div> */}
                {/* Wine Item 2 */}
                {/* <div className="h-32 bg-burgundy/5 rounded-xl p-3 flex gap-4">
                  <div className="w-16 h-full bg-burgundy/20 rounded-lg" />
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 w-2/3 bg-burgundy/20 rounded" />
                    <div className="h-3 w-1/3 bg-burgundy/10 rounded" />
                    <div className="h-8 w-24 bg-burgundy rounded-full" />
                  </div>
                </div> */}
                {/* Wine Item 3 */}
                {/* <div className="h-32 bg-burgundy/5 rounded-xl p-3 flex gap-4">
                  <div className="w-16 h-full bg-burgundy/20 rounded-lg" />
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 w-5/6 bg-burgundy/20 rounded" />
                    <div className="h-3 w-1/2 bg-burgundy/10 rounded" />
                    <div className="h-8 w-24 bg-burgundy rounded-full" />
                  </div>
                </div> */}
              </div>
            </div>

            {/* Notch */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-charcoal-light rounded-b-2xl" /> */}
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="font-serif text-5xl leading-tight">
            Sophistication <br />
            <span className="text-burgundy-light italic">in your pocket.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Experience a fluid interface designed specifically for the wine
            enthusiast. Every interaction is crafted to be as smooth as a
            vintage Bordeaux.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xl">Dark Mode Ready</h4>
                <p className="text-white/60">
                  Easy on the eyes during late-night tastings.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xl">Cloud Sync</h4>
                <p className="text-white/60">
                  Never lose a note. Synchronize your tasting notes across all your devices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
