const aboutImage = "client/public/src/assets/family.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={aboutImage}
              alt="Industrial welding team" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              loading="eager"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-primary mb-6">About National Inspection</h2>
            <p className="text-gray-600 mb-6">
              National Inspection is a premier welding service provider established with a vision to deliver excellence in every aspect of welding operations. With decades of combined industry experience, our team of certified professionals is dedicated to elevating welding standards across industries.
            </p>
            
            <h3 className="text-xl font-bold font-inter text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To empower organizations and individuals with the knowledge, skills, and services needed to achieve the highest standards in welding operations, safety, and quality assurance.
            </p>
            
            <h3 className="text-xl font-bold font-inter text-primary mb-4">Our Expertise</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Advanced welding inspection and testing</li>
              <li>Specialized training and certification programs</li>
              <li>Comprehensive consulting services</li>
              <li>Technical support for complex welding projects</li>
              <li>Quality assurance and compliance guidance</li>
            </ul>
            
            <h3 className="text-xl font-bold font-inter text-primary mb-4">Why We're Different</h3>
            <p className="text-gray-600 mb-6">
              Unlike general inspection services, National Inspection focuses exclusively on welding, offering specialized expertise that goes beyond standard practices. Our holistic approach addresses every aspect of welding operations, from personnel training to equipment calibration and quality inspection.
            </p>
            
            <Button asChild className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md">
              <Link href="/contact">
                <a>Learn More About Our Team</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
