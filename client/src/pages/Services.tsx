import { SERVICES } from "@/lib/constants";
import CTABanner from "@/components/home/CTABanner";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";




const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = [
    {
      
      id: 1,
      title: "Consultancy",
      description: "Our consultancy services help organizations optimize their welding operations for efficiency, quality, and compliance.",
      features: [
        "Welding process optimization",
        "Quality control system development",
        "Compliance with industry standards",
        "Project management assistance",
        "Process documentation and standardization",
        "Expert troubleshooting and problem resolution"
      ],
      benefits: [
        "Reduced operational costs",
        "Improved weld quality",
        "Enhanced productivity",
        "Compliance with industry regulations",
        "Streamlined processes"
      ]
    },
    {
      id: 2,
     
      title: "Training & Certification",
      description: "We offer comprehensive training programs designed to develop skilled welders and inspectors, with industry-recognized certifications.",
      features: [
        "Beginner to advanced level courses",
        "Multiple welding process training",
        "Specialized certification preparation",
        "Hands-on practical sessions",
        "Expert-led theoretical classes",
        "Performance evaluation and feedback"
      ],
      benefits: [
        "Skilled workforce development",
        "Validated professional credentials",
        "Career advancement opportunities",
        "Compliance with job requirements",
        "Enhanced safety awareness"
      ]
    },
    {
      id: 3,
      title: "Calibration",
      description: "Our precision calibration services ensure your welding equipment operates at optimal performance levels.",
      features: [
        "Welding machine calibration",
        "Testing equipment calibration",
        "Calibration certificate issuance",
        "Preventive maintenance",
        "Conformance to standards testing",
        "Equipment performance verification"
      ],
      benefits: [
        "Accurate welding parameters",
        "Consistent weld quality",
        "Extended equipment lifespan",
        "Compliance documentation",
        "Reduced downtime from equipment failures"
      ]
    },
    {
      id: 4,
      
      title: "N.D.T. (Non-Destructive Testing)",
      description: "Our comprehensive NDT services verify the quality and integrity of welds without compromising the structure.",
      features: [
        "Ultrasonic testing",
        "Radiographic testing",
        "Magnetic particle testing",
        "Dye penetrant testing",
        "Visual inspection",
        "Comprehensive reporting"
      ],
      benefits: [
        "Early defect detection",
        "Quality assurance",
        "Risk reduction",
        "Cost-effective testing",
        "Documentation for compliance"
      ]
    },
    {
      id: 5,
     
      title: "Welding Placement",
      description: "Our placement services connect skilled welders with industry opportunities, benefiting both employers and job seekers.",
      features: [
        "Skilled welder recruitment",
        "Candidate skills assessment",
        "Job requirement analysis",
        "Placement coordination",
        "Follow-up performance evaluation",
        "Contract and permanent positions"
      ],
      benefits: [
        "Access to verified skilled professionals",
        "Reduced recruitment costs",
        "Quick fulfillment of workforce needs",
        "Career opportunities for welders",
        "Industry-specific talent matching"
      ]
    },
    {
      id: 6,
     
      title: "Quality Inspection",
      description: "Our comprehensive inspection services ensure welds meet industry standards and specifications, providing peace of mind and documentation.",
      features: [
        "Pre-welding material inspection",
        "In-process welding inspection",
        "Post-weld quality verification",
        "Documentation and reporting",
        "Code compliance verification",
        "Defect identification and solutions"
      ],
      benefits: [
        "Quality assurance",
        "Compliance documentation",
        "Risk mitigation",
        "Process improvement insights",
        "Third-party verification"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | National Inspection</title>
        <meta name="description" content="Discover our comprehensive welding services including consultancy, training, certification, NDT, calibration and placement services." />
      </Helmet>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive welding services to support your business needs and ensure quality and compliance." 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {serviceDetails.map((service) => (
              <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div 
                        className="h-72 bg-cover bg-center rounded-lg mb-4 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105" 
                        style={{ 
                          backgroundImage: `url('${SERVICES.find(s => s.id === service.id)?.backgroundImage}')` 
                        }}
                      >
                        <div className="h-full w-full bg-gradient-to-b from-transparent to-primary/80 rounded-lg flex items-end justify-center p-4">
                          <div className="bg-white/90 p-3 rounded-full shadow-md mb-2">
                            <i className={`${SERVICES.find(s => s.id === service.id)?.icon} text-4xl text-primary`}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl font-bold font-inter text-primary mb-4">{service.title}</h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="features">
                          <AccordionTrigger className="text-lg font-bold text-primary">Services Offered</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-100">
                                  <div className="bg-primary/10 p-1.5 rounded-full text-primary mr-3">
                                    <i className="fas fa-check text-sm"></i>
                                  </div>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="benefits">
                          <AccordionTrigger className="text-lg font-bold text-primary">Key Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                              {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-100">
                                  <div className="bg-primary/10 p-1.5 rounded-full text-primary mr-3">
                                    <i className="fas fa-star text-sm"></i>
                                  </div>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CTABanner />
    </>
  );
};

export default Services;
