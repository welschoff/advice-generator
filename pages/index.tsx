import Advice from '@/components/Advice';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={rubik.className}>
      <div className="grid place-items-center min-h-screen bg-[#202633] text-white">
        <Advice />
      </div>
    </main>
  );
}
