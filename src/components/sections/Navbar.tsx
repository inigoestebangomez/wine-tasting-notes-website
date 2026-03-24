import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed w-full z-50 bg-cream/80 backdrop-blur-md border-b border-burgundy/5"
      data-purpose="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Wine_Tasting_Notes_logo_.png" alt="Wine Tasting Notes Logo" width={50} height={50} />
          <span className="text-charcoal font-medium tracking-widest text-sm uppercase">
            Wine Tasting Notes
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider text-charcoal/70">
          <Link href="#features" className="hover:text-burgundy transition-colors">
            Features
          </Link>
          <Link href="#preview" className="hover:text-burgundy transition-colors">
            App Preview
          </Link>
          <Link href="#download" className="hover:text-burgundy transition-colors">
            Download
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#download"
          className="bg-burgundy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-burgundy-dark transition-all shadow-lg hover:shadow-glow"
        >
          Get App
        </Link>
      </div>
    </nav>
  );
}
