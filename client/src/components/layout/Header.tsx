import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="text-primary text-3xl">
                <i className="fas fa-hard-hat"></i>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-inter text-primary">National Inspection</h1>
                <p className="text-xs sm:text-sm text-accent-500 font-medium">A Total Welder's Hub</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`font-medium cursor-pointer ${location === item.path ? 'text-accent-500' : 'text-primary'} hover:text-accent-500 transition duration-300`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Button asChild className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md">
  <Link href="/contact">
    <span>Get a Quote</span>
  </Link>
</Button>

          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span 
                    className={`font-medium cursor-pointer block ${location === item.path ? 'text-accent-500' : 'text-primary'} hover:text-accent-500 transition duration-300`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <span 
  className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md text-center block cursor-pointer"
  onClick={() => setMobileMenuOpen(false)}
>
  Get a Quote
</span>

              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
