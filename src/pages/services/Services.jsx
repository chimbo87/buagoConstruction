import React from "react";
import "./Services.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Impressed with the professionalism and efficiency of BuagoPula
          Properties. Our project was completed on time and exceeded our
          expectations. <i class="bx bxs-quote-right"></i>
        </p>
        <small>Tinashe M, Zimbabwe</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Highly recommend BuagoPula Properties! They delivered exceptional
          quality and attention to detail throughout our construction project{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Mwale J, Zambia</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          BuagoPula Properties turned our vision into reality! Excellent
          communication and top-notch craftsmanship{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Peter P, Zambia</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Outstanding service from start to finish. BuagoPula Properties went
          above and beyond to ensure our satisfaction. 5 stars{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Travor V. Botswana</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Extremely satisfied with the results. BuagoPula Properties delivered
          on their promises and provided excellent value for money.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Lylod P, Zimbabwe</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Efficient, reliable, and professional. BuagoPula Properties made our
          construction experience stress-free and enjoyable.
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Tatenda B, Zimbabwe</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Couldn't be happier with the outcome. BuagoPula Properties delivered a
          beautifully crafted space that exceeded our expectations.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Banda M, Zambia</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Impressed by the level of expertise and attention to detail. BuagoPula
          Properties truly cares about their clients' satisfaction.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Pitso M, Botswana</small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          BuagoPula Properties is the go-to construction company! They provided
          exceptional service and exceeded all our expectations.{" "}
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Motshleyo H, Zambia</small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Thrilled with the final result! BuagoPula Properties transformed our
          space into something truly remarkable. Highly recommend
          <i class="bx bxs-quote-right"></i>
        </p>
        <small>Talent M, Zimbabwe</small>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-fluid" id="servicePage">
        <h1>Our Services</h1>
      </div>

      <div className="container" id="servicePageSection">
        <h4>What We do</h4>
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Pre-construction services</h6>
              <ul>
                <li>Site selection</li>
                <li>Bill of quantities</li>
                <li>Feasibility studies</li>
                <li>Architectural Designs</li>
                <li>Civil engineering</li>
                <li>Permitting and approvals</li>
                <li>Cost estimation</li>
                <li>Scheduling</li>
                <li>Quantity Savioyer water</li>
                <li>Quantity Savioyer water</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Construction services</h6>
              <ul>
                <li> General contracting</li>
                <li>Subcontracting</li>
                <li>Project management</li>
                <li>Construction supervision</li>
                <li>Site preparation</li>
                <li>Demolition</li>
                <li>Excavation</li>
                <li>Concrete construction</li>
                <li>Electrical work</li>
                <li>Plumbing work</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Residential construction</h6>
              <ul>
                <li> Single-family homes</li>
                <li>Multi-family homes</li>
                <li>Custom homes</li>
                <li>Renovations</li>
                <li>Roofing</li>
                <li>Paving and Skimming</li>
                <li>Ceiling skimming</li>
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
                <li>Waterproofing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Commercial construction</h6>
              <ul>
                <li> Office buildings</li>
                <li>Retail stores</li>
                <li>Restaurants</li>
                <li>Hotels</li>
                <li>Hospitals</li>
                <li>Schools</li>
                <li>Churches</li>
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Industrial construction</h6>
              <ul>
                <li> Factories</li>
                <li>Warehouses</li>
                <li>Power plants</li>
                <li>Manufacturing facilities</li>
                <li>Office buildings</li>
                <li>Retail stores</li>
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Infrastructure construction</h6>
              <ul>
                <li> Roads</li>
                <li>Bridges</li>
                <li>Gabions</li>
                <li>Tunnels</li>
                <li>Airports</li>
                <li>Dams</li>
                <li>Water treatment plants</li>
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Other Services</h6>
              <ul>
                <li> Asbestos abatement</li>
                <li>Lead abatement</li>
                <li>Mold remediation</li>
                <li>Historic preservation</li>
                <li>Green building</li>
                <li>Window and door installation</li>
                <li>Exterior Painting</li>
                <li>Cabinet and Countertop Installations</li>
                <li>Appliance Installation</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Interior Finishing</h6>
              <ul>
                <li> Tilling</li>
                <li>Carpet Flooring</li>
                <li>Hardwood floors</li>
                <li>Natural Stone Flooring</li>
                <li>Concrete Flooring</li>
                <li>Vinyl Flooring</li>
                <li>Laminate Flooring</li>
                <li>Landscape architecture</li>
                <li>Carpentry</li>
                <li>Trim Installations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" id="theParterPageSection">
          <h2>Testimonials</h2>
          <h4>What our clients say about us</h4>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
