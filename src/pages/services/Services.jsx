import React from "react";
import "./Services.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Archford C, Zimbabwe ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
       <div id="partnerCardBox">
       <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          John Doe, USA C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
       <div id="partnerCardBox">
       <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Trish G, Brazil ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Travor S ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Lylod P, S Africa C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Tatenda B, Mozambique C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
     <div id="partnerCardBox">
     <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
      <i class='bx bxs-quote-left'></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class='bx bxs-quote-right'></i>
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

      <div className="container">
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
        </div>
        <div className="container" id="theParterPageSection">
          <h2>Testimonials</h2>
          <h4>What  our clients say about us</h4>
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
      <Footer/>
    </>
  );
}

export default Services;
