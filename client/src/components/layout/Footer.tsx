import { Link } from "wouter";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl text-accent-500">
                <i className="fas fa-hard-hat"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold font-inter">National Inspection</h3>
                <p className="text-sm text-accent-500">A Total Welder's Hub</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing comprehensive welding services, training, and certification to enhance quality and safety in the welding industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-inter mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2"></i> Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2"></i> About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2"></i> Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/training">
                  <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2"></i> Training & Certification
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2"></i> Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-inter mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href="/services">
                    <a className="text-gray-300 hover:text-accent-500 transition duration-300 flex items-center">
                      <i className="fas fa-chevron-right text-xs mr-2"></i> {service.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-inter mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-accent-500 mt-1 mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-gray-300">
                  {CONTACT_INFO.address.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < CONTACT_INFO.address.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-accent-500 mt-1 mr-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-gray-300">{CONTACT_INFO.phone[0]}</span>
              </li>
              <li className="flex items-start">
                <div className="text-accent-500 mt-1 mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-gray-300">{CONTACT_INFO.email[0]}</span>
              </li>
              <li className="flex items-start">
                <div className="text-accent-500 mt-1 mr-3">
                  <i className="fas fa-clock"></i>
                </div>
                <span className="text-gray-300">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-1PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} National Inspection. All rights reserved. | 
            <a href="#" className="text-accent-500 hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-accent-500 hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
