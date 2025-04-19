import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-primary mb-4">
            Why Choose National Inspection?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine expertise, comprehensive services, and quality assurance to deliver exceptional welding solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <Card key={feature.id} className="bg-gray-50 hover:shadow-lg transition duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl text-accent-500 mb-4 mx-auto">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold font-inter text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
