import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandWorkSection from '@/components/BrandWorkSection';
import ServicesSection from '@/components/ServicesSection';
import WorksSection from '@/components/WorksSection';
import OtherWorksSection from '@/components/OtherWorksSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandWorkSection />
      <WorksSection />
      <ServicesSection />
      <OtherWorksSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
