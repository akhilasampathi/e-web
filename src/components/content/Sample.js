import React from 'react';
import { Link } from 'react-router-dom';
import './Sample.css'
import laptop2 from '../images/laptop2.jpg';
// import laptop from '../images/laptop.webp';
import laptop3 from '../images/laptop3.jpg';
import laptop4 from '../images/laptop4.jpg';
import laptop5 from '../images/laptop5.jpg';
import laptop6 from '../images/laptop6.jpg';
const Sample = () => {
  return (
    // <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr' }}>
    <>
    <div className='new'>
      <h1>New Arrivals</h1>
    </div>
    <div className="container-cards" style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr' }} >
    <div className="card">
    <center> <img src={laptop2} alt="mobileproduct"  style={{width:'60%',height:'60%',}}/></center> 
          <div className="card-titlee">
          <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                  
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
          <center>  <button>View Details</button></center>
          </Link>
          </div>
    </div>
    <div className="card">
    <center> <img src={laptop2} alt="mobileproduct"  style={{width:'60%',height:'60%',}}/></center> 
     
          <div className="card-titlee">
          <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                   
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
          <center> <button>View Details</button></center> 
          </Link>
          </div>
    </div>
    <div className="card">
    <center> <img src={laptop3} alt="mobileproduct"  style={{width:'55%',height:'20%',}}/></center> 
      
          <div className="card-titlee">
          <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                   
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
          <center> <button>View Details</button></center> 
          </Link>
          </div>
        </div>
    <div className="card">
    <center> <img src={laptop4} alt="mobileproduct"  style={{width:'60%',height:'60%',}}/></center> 
      <div className="card-body">
        
      <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                   
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
          <center> <button>View Details</button></center> 
          </Link>
          </div>
        </div>
    <div className="card">
    <center> <img src={laptop5} alt="mobileproduct"  style={{width:'60%',height:'60%',}}/></center> 
      
          <div className="card-titlee">
          <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                    
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
           <center><button>View Details</button></center> 
          </Link>
          </div>
        </div>
    <div className="card">
    <center> <img src={laptop6} alt="mobileproduct"  style={{width:'48%',height:'48%',}}/></center> 
          <div className="card-titlee">
          <center><h4>ASUS VIVO BOOK</h4></center>
        <center><h3>₹80.900</h3></center>                
          </div>
         <div className="View-btn">
         <Link to="/Singleproduct">
          <center> <button>View Details</button></center> 
          </Link>
          </div>
        </div>

      </div> 
      </>  
  );
}
export default Sample;
