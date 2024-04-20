// import React, { useState } from "react";
// import "./SlideShow.css"; // Import CSS file for styling
// const Slideshow = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <div className="slideshow-container">
//       <div className="slide">
//         <img
//           src={images[currentIndex]}
//           alt={Slide ${currentIndex}}
//           style={{ width: "450px", height: "300px", margin: "10px" }}
//         />
//         <img
//   src={images[(currentIndex + 1) % images.length]}
//   alt={Slide ${(currentIndex + 1) % images.length}}
//   style={{ width: "450px", height: "300px", margin: "10px" }}
// />
// <img
//   src={images[(currentIndex + 2) % images.length]}
//   alt={Slide ${(currentIndex + 2) % images.length}}
//   style={{ width: "450px", height: "300px", margin: "10px" }}
// />
//       </div>
//       {/* Previous and Next arrows */}
//       <a className="prev" onClick={goToPrevSlide}>
//         &#10094;
//       </a>
//       <a className="next" onClick={goToNextSlide}>
//         &#10095;
//       </a>
//     </div>
//   );
// };
// export default Slideshow;