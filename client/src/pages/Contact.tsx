import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/layout/PageHeader";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Contact = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [activeLocation, setActiveLocation] = useState("destination");
  
  // Virar, Maharashtra coordinates (fixed destination)
  const destinationLocation = {
    lat: 19.4564,
    lng: 72.7925,
    name: "National Inspection Services - Virar"
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          name: "Your Current Location"
        });
      },
      (err) => {
        console.error("Error getting location", err);
      }
    );
  }, []);

  // Get the active map URL based on selection
  const getMapUrl = () => {
    if (activeLocation === "user" && userLocation) {
      return `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=15&output=embed`;
    } else if (activeLocation === "destination") {
      return `https://www.google.com/maps?q=${destinationLocation.lat},${destinationLocation.lng}&z=15&output=embed`;
    } else if (activeLocation === "directions" && userLocation) {
      return `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${destinationLocation.lat},${destinationLocation.lng}/&output=embed`;
    }
    return "";
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
          <ContactSection />
          <div className="map-section">
            <div className="map-header">
              <h2>Location</h2>
              <div className="map-tabs">
                <button 
                  className={`map-tab ${activeLocation === "destination" ? "active" : ""}`}
                  onClick={() => setActiveLocation("destination")}
                >
                  Our Office (Virar)
                </button>
                <button 
                  className={`map-tab ${activeLocation === "user" ? "active" : ""}`}
                  onClick={() => setActiveLocation("user")}
                  disabled={!userLocation}
                >
                  Your Location
                </button>
                <button 
                  className={`map-tab ${activeLocation === "directions" ? "active" : ""}`}
                  onClick={() => setActiveLocation("directions")}
                  disabled={!userLocation}
                >
                  Get Directions
                </button>
              </div>
            </div>
            
            <div className="map-container">
              {(activeLocation === "user" && !userLocation) ? (
                <div className="map-loading">
                  <p>Locating your position...</p>
                </div>
              ) : (
                <iframe
                  title="Map View"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '8px' }}
                  src={getMapUrl()}
                  allowFullScreen
                ></iframe>
              )}
            </div>
            
            <div className="map-info">
              <div className="info-card">
                <h3>Visit Our Office</h3>
                <p>
                  <strong>National Inspection Services</strong><br />
                  123 Welding Street, Near Railway Station<br />
                  Virar West, Maharashtra 401303<br />
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
      </section>

      <style jsx>{`
        .contact-container {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-section {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .map-header {
          padding: 1.5rem 1.5rem 0;
        }

        .map-header h2 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
          color: #333;
        }

        .map-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .map-tab {
          padding: 0.5rem 1rem;
          background: #f0f0f0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .map-tab:hover {
          background: #e0e0e0;
        }

        .map-tab.active {
          background: #0066cc;
          color: white;
        }

        .map-tab:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .map-container {
          padding: 0 1.5rem;
          height: 400px;
        }

        .map-loading {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f7f7;
          border-radius: 8px;
        }

        .map-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          padding: 1.5rem;
        }

        .info-card {
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 6px;
        }

        .info-card h3 {
          margin-bottom: 0.5rem;
          color: #0066cc;
          font-size: 1.2rem;
        }

        .info-card p {
          color: #555;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .map-info {
            grid-template-columns: 1fr;
          }
          
          .map-tabs {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;