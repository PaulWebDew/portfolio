import { HomeScreen } from '@/components/screens/HomeScreen/HomeScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PaulWebDew',
  description: 'frontend developer',
};

export default function Page() {
  return (
    <main>
      <section className={'relative h-dvh w-full '}>
        <HomeScreen />
      </section>
    </main>
  );
}
