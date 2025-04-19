import AboutSection from "@/components/about/AboutSection";
import CTABanner from "@/components/home/CTABanner";
import PageHeader from "@/components/layout/PageHeader";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Us | National Inspection</title>
        <meta name="description" content="Learn about National Inspection, our mission, expertise, and what makes us the leading welding service provider." />
      </Helmet>
      <PageHeader 
        title="About Us" 
        description="Learn about our company, our mission, and what sets us apart in the welding industry." 
      />
      <AboutSection />
      <CTABanner />
    </>
  );
};

export default About;
