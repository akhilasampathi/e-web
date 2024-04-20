import React from "react";
import "./Discount.css";
import smartw1 from "../images/smart w1.webp";
import smartwa2 from "../images/smart wa3.webp";
import smartw3 from "../images/smart w3.webp";
import smartw4 from "../images/smart w4.webp";
import bannerdesign from "../images/bannerdesign.jpg";
const Discount = () => {
  return (
    <>
  <center> <h1>Discounts For You</h1></center> 
    <div className="smart-page">
        <div class="smart-c">
          <img
            src={smartw1}
            alt="placeholder"
            style={{ width: "400px", height: "500px" }}
          />
          <img
            src={smartwa2}
            alt="placeholder"
            style={{ width: "400px", height: "500px" }}
          />
          <img
            src={smartw3}
            alt="placeholder"
            style={{ width: "400px", height: "500px" }}
          />
          <img
            src={smartw4}
            alt="placeholder"
            style={{ width: "400px", height: "500px" }}
          />
        </div>
          <div class="smart-c2">
            <img
              src={bannerdesign}
              alt="placeholder"
              style={{ width: "600px", height: "1000px" }}
            />
          </div>
      </div>
      </>
  );
};
export default Discount;

