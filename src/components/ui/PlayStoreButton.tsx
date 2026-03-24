import Link from "next/link";

interface PlayStoreButtonProps {
  href?: string;
  className?: string;
}

export default function PlayStoreButton({
  href = process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? "#",  
  className = "",
}: PlayStoreButtonProps) {
  return (
    <Link
      href={href as string}
      className={`inline-flex items-center px-6 py-3 bg-charcoal text-white rounded-xl
        hover:bg-charcoal-light transition-all transform hover:-translate-y-1
        shadow-xl ${className}`}
      aria-label="Get it on Google Play"
    >
      {/* Google Play Logo SVG */}
      <svg
        className="w-8 h-8 mr-3"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m3.751.61 13.124 7.546-2.813 2.813zm-2.719-.61 12.047 12-12.046 12c-.613-.271-1.033-.874-1.033-1.575 0-.023 0-.046.001-.068v.003-20.719c-.001-.019-.001-.042-.001-.065 0-.701.42-1.304 1.022-1.571l.011-.004zm19.922 10.594c.414.307.679.795.679 1.344 0 .022 0 .043-.001.065v-.003c.004.043.007.094.007.145 0 .516-.25.974-.636 1.258l-.004.003-2.813 1.593-3.046-2.999 3.047-3.047zm-17.203 12.796 10.312-10.359 2.813 2.813z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] uppercase font-bold tracking-wider">
          Get it on
        </div>
        <div className="text-xl font-semibold leading-tight">Google Play</div>
      </div>
    </Link>
  );
}
