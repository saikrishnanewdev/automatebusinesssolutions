import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMarquee from '@/components/TrustMarquee';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import AutomationShowcase from '@/components/AutomationShowcase';
import Solutions from '@/components/Solutions';
import Industries from '@/components/Industries';
import WhyAutomate from '@/components/WhyAutomate';
import Process from '@/components/Process';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020B19] text-white selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Services />
      <BeforeAfter />
      <AutomationShowcase />
      <Solutions />
      <Industries />
      <WhyAutomate />
      <Process />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}