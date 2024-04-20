import React from 'react';
import './Offer.css';
import AC from '../images/AC.png';
import TV from '../images/TV.webp';
import RF from '../images/RF.webp';
import FAN from '../images/FAN.webp';
import CELL from '../images/CELL.webp';
import BULB from '../images/BULB.webp';
const Offer = () => {
  return (
    <>
    <div className='of'>
       <h1>Gallaxy Offer</h1>
       </div>
    <div className='offer-page'>
       <img src={AC} alt='placeholder' style={{width:'90%',height:'90%',}}/>
       <img src={TV} alt='placeholder' style={{width:'90%',height:'90%',}}/>
       <img src={BULB} alt='placeholder' style={{width:'90%',height:'90%',}}/>
       <img src={CELL} alt='placeholder' style={{width:'90%',height:'90%',}}/>
       <img src={RF} alt='placeholder' style={{width:'90%',height:'90%',}}/>
       <img src={FAN} alt='placeholder' style={{width:'90%',height:'90%',}}/>
    </div>
     </>
  );
}
export default Offer;
