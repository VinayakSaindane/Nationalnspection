import AboutSection from "@/components/about/AboutSection";
import CTABanner from "@/components/home/CTABanner";
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
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-center">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Learn about our company, our mission, and what sets us apart in the welding industry.
          </p>
        </div>
      </div>
      <AboutSection />
      <CTABanner />
    </>
  );
};

export default About;
