import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>National Inspection - A Total Welder's Hub</title>
        <meta name="description" content="National Inspection provides comprehensive welding services including consultancy, training, certification, NDT, calibration and more." />
      </Helmet>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
