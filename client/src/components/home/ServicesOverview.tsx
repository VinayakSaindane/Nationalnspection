import { SERVICES } from "@/lib/constants";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of welding-related services to support your business needs and ensure quality and compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url('${service.backgroundImage}')` }}
              >
                <div className="h-full w-full bg-primary bg-opacity-70 flex items-center justify-center">
                  <i className={`${service.icon} text-5xl text-accent-500`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild className="bg-primary hover:bg-primary-light text-white font-medium">
                  <Link href="/services">
                    <a>Learn More</a>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
