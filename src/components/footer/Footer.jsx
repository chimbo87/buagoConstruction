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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentiall
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>QUICK LINKS</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentiall
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>SOCIALS LINKS</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentiall
            </p>
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
