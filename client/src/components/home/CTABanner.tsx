import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-white mb-2">
              Ready to elevate your welding capabilities?
            </h2>
            <p className="text-gray-300">
              Contact us today for a personalized consultation and service quote.
            </p>
          </div>
          <div>
            <Button asChild className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
              <Link href="/contact">
                <a>Contact Us Now</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
