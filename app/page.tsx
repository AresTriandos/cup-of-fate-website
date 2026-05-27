import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Download from '@/components/Download';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Download />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
