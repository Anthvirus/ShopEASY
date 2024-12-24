import React from 'react';

const Footer = () => {
  return (
    <footer className=" max-w-screen footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We offer a wide range of products to suit your every need. 
            Explore our categories and find the best deals.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: 123 Market Street, Suite 456</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
