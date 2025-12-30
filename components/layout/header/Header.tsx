import { LogoIcon } from '@/assets/svg/LogoIcon';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed border border-primary/70 backdrop-blur-2xl rounded-2xl p-6 overflow-hidden top-2 text-white z-20 mx-auto  max-w-[min(90%,var(--contentWidth))] w-full left-1/2  -translate-x-1/2">
      <div className="relative z-1 w-full flex items-center justify-between">
        <LogoIcon className="w-40 h-8" />
        <div className="flex items-center justify-center gap-12 px-8">
          <Link href="/">Home</Link>
          <Link href="/cases">Cases</Link>
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <linearGradient id="glassGradientTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primaryLight)" stopOpacity="0.4" />
          <stop offset="20%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#glassGradientTopLeft)" />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <linearGradient id="glassGradientBottomRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="80%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--primaryLight)" stopOpacity="0.4" />
        </linearGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#glassGradientBottomRight)" />
      </svg>
    </header>
  );
};
