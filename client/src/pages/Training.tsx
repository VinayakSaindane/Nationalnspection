import TrainingSection from "@/components/training/TrainingSection";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Training & Certification | National Inspection</title>
        <meta name="description" content="Develop your welding skills with our comprehensive training programs and industry-recognized certifications." />
      </Helmet>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-center">Training & Certification</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Develop your team's skills with our comprehensive welding training programs and industry-recognized certifications.
          </p>
        </div>
      </div>
      <TrainingSection />
      <CTABanner />
    </>
  );
};

export default Training;
