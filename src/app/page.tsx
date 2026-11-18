import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import AutomationShowcase from '@/components/AutomationShowcase';
import Industries from '@/components/Industries';
import WhyAutomate from '@/components/WhyAutomate';
import Process from '@/components/Process';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light text-dark selection:bg-primary selection:text-bg-white">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <AutomationShowcase />
      <Industries />
      <WhyAutomate />
      <Process />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}