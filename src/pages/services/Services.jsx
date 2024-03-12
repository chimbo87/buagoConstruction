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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C, Zimbabwe ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          John Doe, USA C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Trish G, Brazil ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Travor S ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Lylod P, S Africa C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Tatenda B, Mozambique C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
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
