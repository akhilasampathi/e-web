import React from 'react';
// import { Link } from 'react-router-dom';
import './Product.css'
import vivo from '../images/vivo.webp';
import iqoo from '../images/iqoo.webp';
import redmi from '../images/redmi.jpg';

const Product = () => {
  return (
    <>
    <div className='ti'>
      <h1>Best Deals on Smartphones</h1>
    </div>
    <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr',}}>
    <div className="container-card" > 
    <div className="card-ti">
    <center> <img src={vivo} alt="mobileproduct"  style={{width:'90%',height:'60%',}}/></center> 
      
          <div className="card-title">
            <h4>Moto </h4>
            <h3>₹1,48,900</h3>                   
          </div>
       
    </div>
    <div className="card-ti">
    <center> <img src={vivo} alt="mobileproduct"  style={{width:'90%',height:'60%',}}/></center> 
      
          <div className="card-title">
            <h4>Moto </h4>
            <h3>₹1,48,900</h3>                   
          </div>
       
    </div>
    <div className="card-ti">
    <center> <img src={iqoo} alt="mobileproduct"  style={{width:'70%',height:'10%',}}/></center> 
      
          <div className="card-title">
            <h4>iqoo </h4>
            <h3>₹1,48,900</h3>                   
          </div>
         
        
    </div>
    <div className="card-ti">
    <center> <img src={redmi} alt="mobileproduct"  style={{width:'100%',height:'60%',}}/></center> 
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>Redmi </h4>
            <h3>₹1,48,900</h3>                   
          </div>
        </div>
      </div>
    </div>
    <div className="card-ti">
    <center> <img src={vivo} alt="mobileproduct"  style={{width:'100%',height:'60%',}}/></center> 
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>Apple </h4>
            <h3>₹1,48,900</h3>                   
          </div>
        </div>
      </div>
    </div>
    <div className="card-ti">
    <center> <img src={vivo} alt="mobileproduct"  style={{width:'100%',height:'60%',}}/></center> 
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>Apple </h4>
            <h3>₹1,48,900</h3>                   
          </div>
        </div>
      </div>
    </div>
    
    <div className="card-ti">
    <center> <img src={redmi} alt="mobileproduct"  style={{width:'100%',height:'60%',}}/></center> 
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>Apple </h4>
            <h3>₹1,48,900</h3>                   
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
      </>
  );
}
export default Product;
