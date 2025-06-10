import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/layout/PageHeader";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Contact = () => {
  // Virar East D-Mart coordinates (fixed destination)
  const destinationLocation = {
    lat: 19.4564,
    lng: 72.7925,
    name: "National Inspection Services - Virar East D-Mart"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the map URL for the office location
  const getMapUrl = () => {
    return `https://www.google.com/maps?q=${destinationLocation.lat},${destinationLocation.lng}&z=15&output=embed`;
  };

  // Handle direction click to open Google Maps in new tab
  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLocation.lat},${destinationLocation.lng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | National Inspection</title>
        <meta
          name="description"
          content="Contact National Inspection for welding services, training, certification, consultancy, and more."
        />
      </Helmet>

      <PageHeader
        title="Contact Us"
        description="Reach out to our team for inquiries, quotes, or to discuss your welding service needs."
      />

      <section className="contact-container">
        <div className="contact-content">
          <div className="contact-section-wrapper">
            {/* Contact Form Section */}
            <ContactSection />
            
            {/* Map Section - Now integrated below the contact form */}
            <div className="map-section">
              <div className="map-header">
                <h2>Our Location</h2>
                <p className="map-description">Click on "Get Directions" to navigate to our office</p>
              </div>
              
              <div className="map-container">
                <iframe
                  title="Map View"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '8px' }}
                  src={getMapUrl()}
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="map-actions">
                <button 
                  className="directions-btn"
                  onClick={handleGetDirections}
                >
                  <span className="directions-icon">📍</span>
                  Get Directions to Our Office
                </button>
              </div>
              
              <div className="map-info">
                <div className="info-card">
                  <h3>Visit Our Office</h3>
                  <p>
                    <strong>National Inspection Services</strong><br />
                    Near D-Mart, Virar East<br />
                    Virar East, Maharashtra 401303<br />
                    India
                  </p>
                </div>
                
                <div className="info-card">
                  <h3>Office Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-container {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-section-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          padding: 2.5rem;
        }

        .map-section {
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 2px solid #f0f0f0;
        }

        .map-header {
          margin-bottom: 1.5rem;
        }

        .map-header h2 {
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
          color: #333;
          font-weight: 600;
        }

        .map-description {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .map-actions {
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 102, 204, 0.2);
        }

        .directions-btn:hover {
          background: #0052a3;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        }

        .directions-btn:active {
          transform: translateY(0);
        }

        .directions-icon {
          font-size: 1.2rem;
        }

        .map-container {
          height: 400px;
          margin-bottom: 1.5rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .map-loading {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f8fa;
          border: 2px dashed #dee2e6;
          border-radius: 8px;
        }

        .map-loading p {
          color: #6c757d;
          font-size: 1rem;
          font-weight: 500;
        }

        .map-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .info-card {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          transition: transform 0.2s ease;
        }

        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .info-card h3 {
          margin-bottom: 0.75rem;
          color: #0066cc;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .info-card p {
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-section-wrapper {
            padding: 1.5rem;
          }
          
          .map-section {
            margin-top: 2rem;
            padding-top: 2rem;
          }
          
          .map-info {
            grid-template-columns: 1fr;
          }
          
          .map-actions {
            margin-bottom: 1rem;
          }
          
          .directions-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 2rem 1rem;
          }
          
          .contact-section-wrapper {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;