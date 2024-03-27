import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
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
            <ul id="footerCardList">
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  navigate("/services");
                }}
              >
                Services
              </li>
              <li
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contacts
              </li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>SOCIALS LINKS</h4>
            <div id="footerIconsLinks">
              <button>
                <a
                  href="https://www.facebook.com/buagopulaproperties?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i class="bx bxl-facebook"></i>Facebook
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/buago_pula_properties?igsh=Y3h2b2ZkenM1dmhy&utm_source=qr"
                  target="_blank"
                >
                  <i class="bx bxl-instagram"></i> Instagram
                </a>
              </button>
              <button>
                <a
                  href="https://api.whatsapp.com/send?phone=263773927966"
                  target="_blank"
                >
                  <i class="bx bxl-whatsapp"></i> Whatsapp
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="footerRightBox" className="container">
        <small>
          {" "}
          &copy; BuagoPula Properties 2024. Developed by{" "}
          <a href="https://wa.me/27677366141" target="_blank">
            CHIMBO
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
