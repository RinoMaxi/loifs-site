import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About LOIFS' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
  return (
    <div className="section">
      <div className="hero">
        <h1 className="hero-title">Professional Reliability Assessment</h1>
        <p className="hero-subtitle">
          Measure, scale, and verify the reliability of your systems, processes, and components with our comprehensive testing.
        </p>
        <p className="hero-descrip">Your trusted partner for /</p>
        <div className="hero-button">
          <button className="btn btn-pri" onClick={() => setCurrentSection('')}>
            Start Assessment
          </button>
        </div>
      </div>
      <div>
        <h2>Our Services</h2>
        <div>
          <button className="btn btn-sec" onClick={() => setCurrentSection('services')}>
            Performance Testing
          </button>
          <button className="btn btn-sec" onClick={() => setCurrentSection('services')}>
            Reliability Auditing
          </button>
          <button className="btn btn-sec" onClick={() => setCurrentSection('services')}>
            Scalability Analysis
          </button>
        </div>
      </div>
    </div>
  );
case 'services':
  return <div className="section">More details about services...</div>;
case 'contact':
  return <div className="section">Contact information...</div>;
default:
  return <div className="section">Home</div>;

      case 'about':
        return (
          <div className="section">
            <div className="content-wrapper">
              <h2>About LOIFS</h2>
              <div className="about-content">
                <p>
                  <strong>LOIFS (Leading Online Information and Financial Services)</strong> is a cutting-edge 
                  platform dedicated to providing comprehensive digital solutions and financial expertise 
                  to businesses and individuals worldwide.
                </p>
                <p>
                  Founded with the vision of bridging the gap between traditional financial services 
                  and modern digital requirements, we offer innovative solutions that are both 
                  reliable and user-friendly.
                </p>
                
                <div className="mission-vision">
                  <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                      To empower our clients with superior online information services and financial 
                      solutions that drive growth, efficiency, and success in the digital age.
                    </p>
                  </div>
                  <div className="vision">
                    <h3>Our Vision</h3>
                    <p>
                      To be the leading provider of integrated online information and financial 
                      services, setting new standards for excellence and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="section">
            <div className="content-wrapper">
              <h2>Our Services</h2>
              <div className="services-grid">
                <div className="service-item">
                  <h3>📊 Financial Analytics</h3>
                  <p>Comprehensive financial analysis and reporting services to help you make informed decisions.</p>
                </div>
                <div className="service-item">
                  <h3>💳 Payment Processing</h3>
                  <p>Secure and efficient payment processing solutions for businesses of all sizes.</p>
                </div>
                <div className="service-item">
                  <h3>📈 Investment Advisory</h3>
                  <p>Expert investment advice and portfolio management services tailored to your goals.</p>
                </div>
                <div className="service-item">
                  <h3>🔍 Information Services</h3>
                  <p>Comprehensive data collection, analysis, and reporting for strategic decision-making.</p>
                </div>
                <div className="service-item">
                  <h3>🏦 Banking Solutions</h3>
                  <p>Modern banking solutions with traditional reliability and cutting-edge technology.</p>
                </div>
                <div className="service-item">
                  <h3>📱 Digital Transformation</h3>
                  <p>Complete digital transformation services to modernize your financial operations.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="section">
            <div className="content-wrapper">
              <h2>Contact Us</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <h3>📧 Email</h3>
                    <p>info@loifs.com</p>
                    <p>support@loifs.com</p>
                  </div>
                  <div className="contact-item">
                    <h3>📞 Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                  <div className="contact-item">
                    <h3>🏢 Address</h3>
                    <p>123 Financial District</p>
                    <p>New York, NY 10001</p>
                  </div>
                  <div className="contact-item">
                    <h3>🕐 Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="contact-form">
                  <h3>Get in Touch</h3>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-input" />
                  </div>
                  <div className="form-group">
                    <select className="form-input">
                      <option>Select Service</option>
                      <option>Financial Analytics</option>
                      <option>Payment Processing</option>
                      <option>Investment Advisory</option>
                      <option>Information Services</option>
                      <option>Banking Solutions</option>
                      <option>Digital Transformation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" className="form-input" rows="5"></textarea>
                  </div>
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">LOIFS</span>
          </div>
          <ul className="nav-menu">
            {navigation.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>LOIFS</h4>
            <p>Leading Online Information and Financial Services</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => setCurrentSection('home')}>Home</button></li>
              <li><button onClick={() => setCurrentSection('about')}>About</button></li>
              <li><button onClick={() => setCurrentSection('services')}>Services</button></li>
              <li><button onClick={() => setCurrentSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Financial Analytics</li>
              <li>Payment Processing</li>
              <li>Investment Advisory</li>
              <li>Information Services</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 LOIFS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;