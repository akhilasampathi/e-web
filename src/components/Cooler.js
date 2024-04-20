import React from 'react';
import './Cooler.css';
import redmi from './images/best.png';
import bestt from './images/bestt.jpg';
import besttt from './images/besttt.jpg';
import bestttt from './images/bestttt.jpg';
import besttttt from './images/besttttt.jpg';

const Cooler = () => {
  return (
    <>
    <div className='head'>
      <h1>Shop For Air Coolers</h1>
    </div>
    <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr 1rf'}}>
      <div  className='best'>
        <div className='best-cooler'>
     <img src={redmi} alt='cooler' style={{width:'200px',height:'100%',}}/>
     <div class="cool">
      <h4>Crompton 40L Air Cooler</h4>
     </div>
     </div>
     <div className='best-cooler'>
     <img src={bestt} alt='cooler' style={{width:'205px',height:'105%'}}/>
     <div class="cool">
      <h4>Voltas 115L Desert Air </h4>
     </div>
     </div>
     <div className='best-cooler'>
     <img src={besttt} alt='cooler' style={{width:'205px',height:'106%'}}/>
     <div class="cool">
      <h4>BaJAJ 36L Air Cooler</h4>
     </div>
     </div>
     <div className='best-cooler'>
     <img src={bestttt} alt='cooler' style={{width:'200px',height:'100%'}}/>
     <div class="cool">
      <h4>Orient Electric 23L Air</h4>
     </div>
     </div>
     <div className='best-cooler'>
     <img src={besttttt} alt='cooler'style={{width:'205px',height:'105%'}}/>
     <div class="cool">
      <h4>Sansui 60L Air Cooler</h4>
     </div>
     </div>
     <div className='best-cooler'>
     <img src={besttt} alt='cooler' style={{width:'200px',height:'100%'}}/>
     <div class="cool">
      <h4>Novaman 100L Air Cooler</h4>
     </div>
    </div>
   </div>                          
   </div>
   </>
  );
}
export default Cooler;

