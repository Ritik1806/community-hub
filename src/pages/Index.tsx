
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import HowItWorks from '../components/home/HowItWorks';
import ImpactStats from '../components/home/ImpactStats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <ImpactStats />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
