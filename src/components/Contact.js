import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:mjzwebsite@gmail.com">mjzwebsite@gmail.com</a></p>
          <p>Phone: <a href="cp:">0938-2942315</a></p>
          <p>Address: Purok Ligaa Barangay Ibabang Talim Lucena City</p>
          
          {}
          <div className="map">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15490.479078938411!2d121.56824929884604!3d13.921661111312725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4ba1351efaf1%3A0x19b6255b0acd605!2sIbabang%20Talim%2C%20Quezon!5e0!3m2!1sen!2sph!4v1727545298968!5m2!1sen!2sph" 
              width="100%"
              height="250"
              allowFullScreen=""
            
            
            ></iframe>
          </div>
        </div>

        {}
        <div className="social-media">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>

      {}
      <section className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
