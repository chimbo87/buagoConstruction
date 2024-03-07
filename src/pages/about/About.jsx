import React from "react";
import "./About.css";
import logo from "../../assets/logo.jpg";
import aboutbanner from "../../assets/abtstrory.jpg";
import blogbanner from "../../assets/blogpic1.jpg";
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
        <div class="row" id="aboutOfferWrap">
          <div class="col-lg-6 col-md-4">
            <div id="aboutOfferWrapCard">
              <div id="aboutOfferWrapBox">
                <h1>10+</h1>
                <p>Years Experience</p>
              </div>

              <div id="aboutOfferWrapBox">
                <h1>1000+</h1>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="aboutOfferWrapCard">
              <div id="aboutOfferWrapBox">
                <h1>500+</h1>
                <p>Affiliated Clients</p>
              </div>

              <div id="aboutOfferWrapBox">
                <h1>10+</h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div id="accordionPage">
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
                  Industry Leaders in Construction Excellence
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  With decades of combined experience and a proven track record
                  of successful projects, we bring unparalleled expertise to
                  every construction endeavor. Our seasoned team of
                  professionals is committed to delivering superior quality,
                  precision, and innovation in every aspect of our work.
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
                  Your Vision, Our Priority
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At BuagoPula, client satisfaction is at the heart of
                  everything we do. We listen closely to your needs, collaborate
                  transparently, and customize our solutions to exceed your
                  expectations. Your vision is our priority, and we are
                  dedicated to bringing it to life with integrity,
                  professionalism, and unwavering dedication.
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
                  Uncompromising Commitment to Excellence
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our commitment to quality is unwavering. From meticulous
                  planning to rigorous quality control measures, we ensure that
                  every project is executed to the highest standards of
                  craftsmanship and precision. With BuagoPula, you can trust
                  that your project will be built with uncompromising quality
                  and attention to detail.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Pioneering Construction Innovation
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Embracing the latest advancements in technology and
                  construction practices, we strive to push the boundaries of
                  innovation in every project we undertake. From sustainable
                  building techniques to cutting-edge design concepts, we are
                  committed to delivering forward-thinking solutions that set
                  new benchmarks in the industry.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Your Trusted Partner from Concept to Completion
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At BuagoPula, we believe in building lasting relationships
                  with our clients. Our dedicated team provides comprehensive
                  support throughout every stage of the construction process,
                  from initial concept development to project completion and
                  beyond. With BuagoPula by your side, you can trust that you
                  have a reliable partner committed to your success.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="blogPage">
          <h4>Our Blog</h4>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogbanner} alt="" />
              <h5> Lorem Ipsum is simply dummy </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogbanner} alt="" />
              <h5> Lorem Ipsum is simply dummy </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogbanner} alt="" />
              <h5> Lorem Ipsum is simply dummy </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
