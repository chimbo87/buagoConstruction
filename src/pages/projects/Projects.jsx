import React, { useState } from "react";
import "./Projects.css";
import blogpic02 from "../../assets/construction.jpg";
import project1 from "../../assets/work1.jpeg";
import project2 from "../../assets/work2.jpeg";
import project3 from "../../assets/work3.jpeg";
import project4 from "../../assets/work4.jpeg";
import project5 from "../../assets/work5.jpeg";
import project6 from "../../assets/work6.jpeg";
import project7 from "../../assets/work7.jpeg";
import project8 from "../../assets/work8.jpeg";
import project9 from "../../assets/work9.jpeg";
import project10 from "../../assets/work10.jpeg";
import project11 from "../../assets/work11.jpeg";
import project12 from "../../assets/work12.jpeg";
import { Image } from "antd";
import Footer from "../../components/footer/Footer";

function Projects() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className="container-fluid" id="projectPage">
        <h1>Our Works</h1>
      </div>

      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          <div>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Roofing
            </button>
          </div>

          <div>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Flooring
            </button>
          </div>

          <div>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Durawalls
            </button>
          </div>

          <div>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Pavings
            </button>
          </div>

          <div>
            <button
              className={activeButton === 6 ? "active" : ""}
              onClick={() => handleButtonClick(6)}
            >
              Buildings
            </button>
          </div>

          <div>
            <button
              className={activeButton === 7 ? "active" : ""}
              onClick={() => handleButtonClick(7)}
            >
              Painting
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="projectPageBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project1}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project2}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project3}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
              <Image src={project1} id="mainImg"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
              <Image src={project6} id="mainImg"/>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project6}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project7}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project8}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project9}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
              <Image src={project10} id="mainImg" />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
              <Image src={project11} id="mainImg" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project12}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project8}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project10}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project4}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
