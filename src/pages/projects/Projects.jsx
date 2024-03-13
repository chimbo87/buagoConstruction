import React, { useState } from "react";
import "./Projects.css";
import blogpic02 from "../../assets/construction.jpg";

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
              <div id="projectCardImg">
                <img src={blogpic02} />
              </div>
              <div id="projectCardImg">
                <img src={blogpic02} />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImg">
                <img src={blogpic02} />
              </div>
              <div id="projectCardImg">
                <img src={blogpic02} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
