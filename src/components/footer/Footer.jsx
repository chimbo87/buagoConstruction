import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="footerCard">
            {/* <h4>ABOUT</h4> */}
            <div id="footerImgBox">
              {/* <img src={logo} /> */}
              <h5>BuagoPula Properties Pvt Ltd</h5>
            </div>
            <p>
              At BuagoPula, our mission goes beyond just constructing buildings;
              we strive to create spaces that inspire and transform communities.
              From sustainable design practices to innovative construction
              techniques, we prioritize environmental stewardship and social
              responsibility in all our projects. We believe in fostering
              long-term relationships with our clients, partners, and
              stakeholders, built on transparency, collaboration, and mutual
              respect. Our commitment to excellence extends beyond the
              completion of a project, as we continue to support our clients
              throughout the lifecycle of their properties, ensuring enduring
              value and lasting impact. At BuagoPula, we are dedicated to
              shaping a brighter future, one building at a time
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>QUICK LINKS</h4>
            <ul  id="footerCardList">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contacts</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>SOCIALS LINKS</h4>
            <div id="footerIconsLinks">
              <button> <i class="bx bxl-facebook"></i> Facebook</button>
              <button><i class="bx bxl-instagram"></i> Instagram</button>
              <button>  <i class="bx bxl-whatsapp"></i>  Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
      <div id="footerRightBox" className="container">
        <small>
          {" "}
          &copy; BuagoPula Properties 2024. Developed by <a href="#">CHIMBO</a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
