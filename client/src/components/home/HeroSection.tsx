import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="bg-primary text-white relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="bg-cover bg-center h-screen flex items-center" 
        style={{ backgroundImage: "url('/src/assets/background.jpg')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-4 leading-tight">
              Your Comprehensive Partner for Welding Excellence
            </h1>
            <p className="text-xl mb-8">
              Providing expert consultancy, training, certification, and quality assurance services for the welding industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
                <Link href="/services">
                  <a>Explore Our Services</a>
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
                <Link href="/contact">
                  <a>Get a Free Consultation</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
