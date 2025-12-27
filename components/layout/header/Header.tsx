import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-2 text-white z-20 mx-auto max-w-frame w-full left-1/2 -translate-x-1/2">
      <Link href="/">Home</Link>
      <Link href="/cases">Cases</Link>
    </header>
  );
};
