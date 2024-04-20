import React from 'react';
import './Computer.css';
import penbanner from '../images/penbanner.jpg';
import laptop1 from '../images/laptop1.jpg';
const Computer = () => {
  return (
    <div className="app-grid">
     <header className="header">
      <div className='ba'>
     <img src={penbanner} alt="mobileproduct" style={{width:"1200px", height:"350px"}}/>
     </div>
     </header> 
      <aside className="sidebar">
      <aside className="sidebar">
    <div className="filter-section">
        <h1>Filters</h1>
        <ul className="filter-list">
            <li><label><input type="checkbox" /> Brand</label></li>
            <li><label><input type="checkbox" /> Customer Reviews</label></li>
            <li><label><input type="checkbox" /> RAM</label></li>
            <li><label><input type="checkbox" /> Screen Size</label></li>
            {/* Add more filter options as needed */}
        </ul>

        <h1>Brand</h1>
        <ul className="filter-list">
            <li><label><input type="checkbox" /> vivo</label></li>
            <li><label><input type="checkbox" />Realme</label></li>
            <li><label><input type="checkbox" /> Oppo</label></li>
            <li><label><input type="checkbox" /> Moto</label></li>
            {/* Add more filter options as needed */}
        </ul>
        <h2>Customer Reviews</h2>
        <ul>
        <li><label><input type="checkbox" />4★ & above </label></li>
        <li><label><input type="checkbox" />3★ & above</label></li>
        </ul>
        <h2>RAM</h2>
        <ul>
        <li><label><input type="checkbox" />4GB </label></li>
        <li><label><input type="checkbox" />3GB</label></li>
        <li><label><input type="checkbox" />6GB</label></li>
        <li><label><input type="checkbox" />8GB</label></li>
        </ul>
        <h2>Battery Capacity</h2>
        <ul>
        <li><label><input type="checkbox" />2000 - 2999 mAh </label></li>
        <li><label><input type="checkbox" />3000 - 3999 mAh</label></li>
        <li><label><input type="checkbox" />4000 - 4999 mAh</label></li>
        <li><label><input type="checkbox" />5000 - 5999 mAh</label></li>
        </ul>
        <h2>Processor Brand</h2>
        <ul>
        <li><label><input type="checkbox" />Mediatek</label></li>
        <li><label><input type="checkbox" />Snapdragon </label></li>
        </ul>
        <h2>Screen Size</h2>
        <ul>
        <li><label><input type="checkbox" />5.7 - 5.9 inch</label></li>
        <li><label><input type="checkbox" />5.5 - 5.6 inch</label></li>
        <li><label><input type="checkbox" />6.4 inch & Above</label></li>
        <li><label><input type="checkbox" />6 - 6.3 inch</label></li>
        </ul>
        <h2>Primary Camera</h2>
        <ul>
        <li><label><input type="checkbox" />8 - 11.9 MP</label></li>
        <li><label><input type="checkbox" />12 - 15.9 MP</label></li>
        <li><label><input type="checkbox" />16 - 20.9 MP</label></li>
        <li><label><input type="checkbox" />48 - 63.9 MP</label></li>
        </ul>
    </div>
</aside>

      </aside>
      <>
     
      <main className="main-contentt">
        <div className='phoneo'>
        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
          <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>

        <div className='phonee'>
      <img src={laptop1} alt="mobileproduct" style={{width:"200px", height:"200px"}}/>
        <div className='phone'>
        <h2>vivo T3 5G (Crystal Flake, 128 GB)  (8 GB RAM)</h2>
          <ul>
            <li>₹19,999</li>
            <li>Bank Offer5% Cashback on Axis Bank CardT&C</li>
    
         <li> Bank OfferGet ₹25* instant discount for the 1st  Order using  UPIT&C</li>

         <li> Bank Offer₹1500 Off On HDFC Bank Credit and Debit Card TransactionsT&C</li>

         <li> Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&Cv</li>
         <li>8 GB RAM | 128 GB ROM
16.94 cm (6.67 inch) Full HD+ Display
50MP + 2MP | 16MP Front Camera
5000 mAh Battery
Dimensity 7200 Processor</li>
</ul>
        </div>
        </div>
        </div>
      </main>
      </>
      {/* <footer className="footer">Footer</footer> */}
    </div>
    
  );
}
export default Computer;


