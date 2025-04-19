import ContactSection from "@/components/contact/ContactSection";
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
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-center">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Reach out to our team for inquiries, quotes, or to discuss your welding service needs.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Contact;
