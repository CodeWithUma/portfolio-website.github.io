import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SocialLinks from '../components/SocialLinks';
import '../styles/Contact.css';

const Contact = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('contact');
    }
  }, [inView, setActiveSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Get In <span className="contact-title-highlight">Touch</span>
        </h2>
        
        <p className="contact-subtitle">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="contact-info-label">Email</h4>
                  <p className="contact-info-text">umadas.dev@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="contact-info-label">Phone</h4>
                  <p className="contact-info-text">+91 7978175924</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="contact-info-label">Location</h4>
                  <p className="contact-info-text">India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4 className="contact-social-title">Follow Me</h4>
              <SocialLinks />
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="form-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;