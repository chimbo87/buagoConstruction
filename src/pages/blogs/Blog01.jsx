import React from "react";
import "./Blog01.css";
import blogpic02 from "../../assets/construction.jpg";

function Blog01() {
  return (
    <div className="container" id="blogePage">
      <div id="blogPage01">
        <img src={blogpic02} />
        <div id="blogAuther">
          <h5>W Mushambi</h5>
          <p>
            <i>12 0ctober 2010</i>
          </p>
        </div>
        <h4>Lorem Ipsum is simply dummy</h4>
        <div id="blogText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div id="blogSocialLinks">
          <h5>Follow Us</h5>{" "}
          <button>
            {" "}
            <i class="bx bxl-facebook"></i> Facebook
          </button>
          <button>
            <i class="bx bxl-instagram"></i> Instagram
          </button>
          <button>
            {" "}
            <i class="bx bxl-whatsapp"></i> Whatsapp
          </button>
        </div>
        <div id="blogBackArrow">
          <p>
            <i class="bx bx-chevrons-left"></i> back
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog01;
