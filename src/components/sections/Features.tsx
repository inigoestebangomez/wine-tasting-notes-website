export default function Features() {
  return (
    <section
      className="py-24 bg-cream-dark"
      data-purpose="features-section"
      id="features"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-5xl text-burgundy mb-6">
            Master the Art of Tasting
          </h2>
          <p className="text-charcoal/60 text-lg">
            Designed for sommeliers, students, and passionate collectors, our features help you preserve the memories of your favorite pours.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1: Scan Labels */}
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-burgundy/5 group">
            <div className="w-16 h-16 bg-burgundy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-burgundy group-hover:text-white transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-burgundy">
              Scan Labels
            </h3>
            <p className="text-charcoal/60 leading-relaxed">
              Instantly identify any bottle. Our AI-powered scanner pulls
              vintage details, ratings, and critic notes in seconds.
            </p>
          </div>

          {/* Feature 2: Flavor Profiles */}
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-burgundy/5 group">
            <div className="w-16 h-16 bg-burgundy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-burgundy group-hover:text-white transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-burgundy">
              Professional Evaluation
            </h3>
            <p className="text-charcoal/60 leading-relaxed">
              Assess color, intensity, and clarity. Map your palate with aromatic profiles. Record sweetness, acidity, tannins and notes with a professional interface.
            </p>
          </div>

          {/* Feature 3: Personal Cellar */}
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-burgundy/5 group">
            <div className="w-16 h-16 bg-burgundy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-burgundy group-hover:text-white transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-burgundy">
              Rate your tasting notes
            </h3>
            <p className="text-charcoal/60 leading-relaxed">
              Rate your tasting notes from 0 to 5 points, and export your tasting notes to your Vivino profile, or download them as notes to paste and share anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
