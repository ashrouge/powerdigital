import Image from 'next/image';
import { Hero } from '@/components';
import { Nav } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
    </main>
  )
}
