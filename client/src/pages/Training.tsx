import TrainingSection from "@/components/training/TrainingSection";
import CTABanner from "@/components/home/CTABanner";
import PageHeader from "@/components/layout/PageHeader";
import { useEffect } from "react";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <title>Training & Certification | National Inspection</title>
        <meta name="description" content="Develop your welding skills with our comprehensive training programs and industry-recognized certifications." />
      
      <PageHeader 
        title="Training & Certification" 
        description="Develop your team's skills with our comprehensive welding training programs and industry-recognized certifications." 
      />
      <TrainingSection />
      <CTABanner />
    </>
  );
};

export default Training;
