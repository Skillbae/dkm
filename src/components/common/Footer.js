import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col col-1">
          <h3>About us</h3>
          <p className="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            quibusdam!
          </p>
          <h3>Follow Us</h3>
          <div className="footer-social">
            <div className="footer-social-icon">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="footer-social-icon">
              <InstagramOutlined />
            </div>
            <div className="footer-social-icon">
              <i className="fab fa-linkedin-in" />
            </div>
            <div className="footer-social-icon">
              <TwitterOutlined />
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Information</h3>
          <ul>
            <li className="footer-link">Profile</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Address</li>
            <li className="footer-link">Return Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Returns</h3>
          <ul>
            <li className="footer-link">FAQs</li>
            <li className="footer-link">Size Guide</li>
            <li className="footer-link">Sell with us</li>
            <li className="footer-link">Sitemap</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in Touch</h3>
          <address className="footer-address">
            <span>445</span>
            <span>Mount Eden Road,</span>
            <span>Mount Eden, Auckland - </span>
            <span>Pincode : 123456</span>
          </address>
        </div>
      </div>

      <div className="footer-end">
        <div>
          <span>
            Crafted with ❤ by
            <a href="https://rishupatel.in" className="author">
              Rishu Patel
            </a>
          </span>
        </div>
        <div className="flex-spacer" />
        <div>
          <span>Copyright © 2021 | DKM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
