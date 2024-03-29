import React, { useState } from "react";
import "./Contact.css";
import Footer from "../../components/footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone || !message) {
      toast.error("Please fill  out all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      // You can send the form data here
      toast.success("Message send !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
      // Reset form inputs
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="container-fluid" id="contactPage">
        <h1>Contact Us</h1>
      </div>

      <div className="container" id="contactPageBox">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="contactUsCard">
              <h4>
                We are committed, <br /> to delivering high-quality services,
                <br /> to our clients. <br />
                Please visit our offices.
              </h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="contactUsCard">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.350477495533!2d31.0615526!3d-17.822197899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4df3022689b%3A0xa96d8d439e3f07dc!2s108%20Central%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sza!4v1710229529285!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div id="contactHiring">
          <h4>We are hiring !</h4>
          <p>
            We are currently hiring. Do you have what it takes? If you possess
            the necessary skills, please refer to the information provided below
            to apply.
          </p>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <ul id="hireCard">
                <li>Brick Layers</li>
                <li>Painters</li>
                <li>Capenters</li>
                <li>Electrician</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul id="hireCard">
                <li>Brick Layers</li>
                <li>Painters</li>
                <li>Capenters</li>
                <li>Electrician</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul id="hireCard">
                <li>Brick Layers</li>
                <li>Painters</li>
                <li>Capenters</li>
                <li>Electrician</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" id="homeContact">
          <div class="col-lg-8 col-md-4">
            <form onSubmit={handleSubmit}>
              <h4>Get In Touch With Us</h4>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div id="homeContactBtn">
                <button type="submit">Send</button>
              </div>
              {toast && (
                <div
                  className="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-body">{toast}</div>
                </div>
              )}
            </form>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="homeContactCard">
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-map"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    108 Central avenue<br></br>
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-calendar"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    Mon ~ Sunday<br></br>Open Holidays
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-phone"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    +263 773 927 966 <br></br>
                    +263 716 706 710<br></br>
                    +263 713 896 624<br></br>
                    +263 782 349 095
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    buagopulaproperties@gmail.com<br></br>
                    buagopulaproperties@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
