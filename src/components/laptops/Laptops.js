import React from 'react';
import './Laptop.css'
import apple1 from '../images/apple1.png';
import apple2 from '../images/apple2.png';
import apple3 from '../images/apple3.png';
import apple5 from '../images/apple5.png';
import apple6 from '../images/apple6.png';

const laptops = () => {
  return (
    <div className="main-laptop">
        <div className="ml">
    <img src={apple1} alt='placeholder' style={{width:'60%',height:'80%',}}/>
   <center> <h1>hello</h1></center>
    </div>
    <img src={apple2} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple3} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple1} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple5} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple6} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple6} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple6} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    <img src={apple1} alt='placeholder' style={{width:'60%',height:'80%',}}/>
    </div>
  );
}
export default laptops;
