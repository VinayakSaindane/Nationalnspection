import { Link } from "wouter";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";

const Footer = () => {
  // Social media links - you can update these with your actual URLs
  const socialMediaLinks = [
    {
      icon: "facebook-f",
      href: "https://www.facebook.com/share/g/1ASpQXbsJx/?mibextid=wwXIfr",
      label: "Facebook"
    },
    {
      icon: "linkedin-in",
      href: "https://linkedin.com/company/national-inspection",
      label: "LinkedIn"
    },
    {
      icon: "instagram",
      href: "https://www.instagram.com/national_inspection/",
      label: "Instagram"
    },
    {
      icon: "youtube",
      href: "https://youtube.com/@nationalinspection",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Intro */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-4xl text-accent-500">
                <i className="fas fa-hard-hat"></i>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-inter tracking-tight">
                  National Inspection
                </h3>
                <p className="text-sm text-accent-400 font-light">A Total Welder's Hub</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Providing comprehensive welding services, training, and certification to enhance
              quality and safety in the welding industry.
            </p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="bg-white/10 p-2 rounded-full text-gray-200 hover:text-white hover:bg-accent-500 transition duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6 border-b border-accent-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
                { title: "Services", href: "/services" },
                { title: "Training & Certification", href: "/training" },
                { title: "Contact Us", href: "/contact" },
              ].map(({ title, href }, i) => (
                <li key={i}>
                  <Link href={href}>
                    <a className="flex items-center text-gray-300 hover:text-accent-500 transition">
                      <i className="fas fa-chevron-right text-xs mr-2"></i> {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6 border-b border-accent-500 pb-2">
              Our Services
            </h3>
            <ul className="space-y-4 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href="/services">
                    <a className="flex items-center text-gray-300 hover:text-accent-500 transition">
                      <i className="fas fa-chevron-right text-xs mr-2"></i> {service.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6 border-b border-accent-500 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-accent-500 mt-1 mr-3"></i>
                <span className="text-gray-300">
                  {CONTACT_INFO.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < CONTACT_INFO.address.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-accent-500 mt-1 mr-3"></i>
                <span className="text-gray-300">{CONTACT_INFO.phone[0]}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-accent-500 mt-1 mr-3"></i>
                <span className="text-gray-300">{CONTACT_INFO.email[0]}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-accent-500 mt-1 mr-3"></i>
                <span className="text-gray-300">
                  Mon–Fri: 8AM–6PM
                  <br />
                  Sat: 9AM–1PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} National Inspection. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="text-accent-400 hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-accent-400 hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;