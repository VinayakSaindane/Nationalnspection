import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/layout/PageHeader";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Contact Us | National Inspection</title>
        <meta name="description" content="Contact National Inspection for welding services, training, certification, consultancy, and more." />
      </Helmet>
      <PageHeader 
        title="Contact Us" 
        description="Reach out to our team for inquiries, quotes, or to discuss your welding service needs." 
      />
      <ContactSection />
    </>
  );
};

export default Contact;
