import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light text-dark selection:bg-primary selection:text-bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Founders />
      <Contact />
      <Footer />
    </main>
  );
}
