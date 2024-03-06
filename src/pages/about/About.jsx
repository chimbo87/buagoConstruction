import React from "react";
import "./About.css";
import logo from "../../assets/logo.jpg";
import aboutbanner from "../../assets/abtstrory.jpg";
import Footer from "../../components/footer/Footer";

function About() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <h1>ABOUT US</h1>
      </div>
      <div className="container" id="aboutPageBox">
        <div id="aboutPageBoxCard">
          <div id="aboutPageBoxCardImg">
            <img src={logo} />
          </div>
          <div id="aboutPageBoxCardText">
            <h4>BuagoPula Properties Pvt Ltd</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div class="row" id="storyAboutPage">
          <div class="col-lg-4 col-md-4">
            <div id="aboutHistoryImg">
              <img src={aboutbanner} alt />
            </div>
          </div>
          <div class="col-lg-8 col-md-4">
            <div id="aboutStoryText">
              <h4>Our Story</h4>
              <p>
                With over 10 years of Experience BuagoPula has been involved in
                construction projects across various countries, including
                Botswana, Zambia, and Zimbabwe. Established in 2010, we have
                expanded our presence in the industry, earning the trust of
                thousands of clients and completing over 1000 projects. Our team
                of dedicated professionals is committed to delivering
                high-quality construction solutions tailored to meet the unique
                needs of each project. From residential developments to
                commercial complexes, our expertise spans a wide range of
                sectors, ensuring excellence and innovation in every endeavor.
                At BuagoPula, we take pride in our reputation for reliability,
                integrity, and customer satisfaction, and we look forward to
                partnering with you to bring your construction vision to life.{" "}
              </p>

              <p>
                At BuagoPula, our mission goes beyond just constructing
                buildings; we strive to create spaces that inspire and transform
                communities. From sustainable design practices to innovative
                construction techniques, we prioritize environmental stewardship
                and social responsibility in all our projects. We believe in
                fostering long-term relationships with our clients, partners,
                and stakeholders, built on transparency, collaboration, and
                mutual respect. Our commitment to excellence extends beyond the
                completion of a project, as we continue to support our clients
                throughout the lifecycle of their properties, ensuring enduring
                value and lasting impact. At BuagoPula, we are dedicated to
                shaping a brighter future, one building at a time.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <h4>Why Choose Us</h4>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
