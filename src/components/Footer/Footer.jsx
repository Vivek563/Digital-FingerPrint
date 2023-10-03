import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-icon">
          <li>
            <a href="https://github.com/vivek563" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vivek563maurya"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vivekmaurya_563/"
              className="social-icon"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </div>
        <div className="footer-paragrap">
          <p>&lt;/&gt; & Crafted with ❤ Vivek Maurya</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
