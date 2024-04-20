import React from 'react';
import './contentstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHome,faContactBook, } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
 // Adjust the path based on the actual location of your image

const Contact = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="banner">
        <div className='content'>
      <h1>Contact Us</h1> 
      <div className="contact-info">
        <p>We are always happy to help here at GADGET GALLAXY</p>
    <center><h4>WE ARE HERE TO HELP </h4></center>
      </div>
      <div style={{display:'flex'}}>

      <div className="info"> 
      <center><FontAwesomeIcon icon={faContactBook} />  </center>    
      <center><h4>call us</h4></center> 
      <center><h4>7780108055</h4></center> 
      </div>
      <div className="info"> 
      <center><FontAwesomeIcon icon={faUser} />  </center>    
      <center> <h4>E-MAIL</h4></center> 
      <center><h4>Gallaxy@gmail.com</h4></center> 
      </div>
      <div className="info"> 
      <center><FontAwesomeIcon icon={faHome} />  </center>    
      <center> <h4>ADDRESS</h4></center> 
      <center><h4>BANGALORE</h4></center> 
      </div>
      </div>
     <div className="follow">
      <div class="heading">
     <center><h1>Follow Us</h1></center> 
     <div className="contact-icon">
     {/* <FontAwesomeIcon icon={faUser} />
     <FontAwesomeIcon icon={faUser} />
    <FontAwesomeIcon icon={faUser} />
    <FontAwesomeIcon icon={faUser} /> */}
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-youtube"></i>
     </div>
     </div>
        </div>
      </div>
      </div>
      </>
  );
}

export default Contact;
