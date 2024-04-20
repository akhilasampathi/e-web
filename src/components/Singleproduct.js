import React, { useState } from 'react';
// import phone from './images/phone.webp';
import redmi from './images/redmi.jpg';
import vivo from './images/vivo.webp';
import oneplus from './images/oneplus.jpg';
import Header from './header/Header';
const Singleproduct = () => {
    const [newCollection, setNewCollection] = useState(oneplus);
    const handlerChange = (newImage) => {
        setNewCollection(newImage);
    };
    return (  
         <>
    <div>
        <Header/>
    </div>
            <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginTop: '20px', marginBottom: '500px' }}>
                    <img src={vivo} alt="/" style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={() => handlerChange(vivo)} />
                    <img src={redmi} alt="/" style={{ width: '130px', height: '150px', cursor: 'pointer' }} onClick={() => handlerChange(redmi)} />
                    <img src={vivo} alt="/" style={{ width: '100px', height: '135px', cursor: 'pointer' }} onClick={() => handlerChange(vivo)} />
                    <img src={oneplus} alt="/" style={{ width: '120px', height: '145px', cursor: 'pointer' }} onClick={() => handlerChange(oneplus)} />
                </div>
                <div style={{ marginLeft: '50px' }}>
                    <img src={newCollection} alt="/" style={{ width: '500px', height: '500px', border: '2px solid gray' }} />
                </div>
                <div style={{ marginRight: '50px', marginLeft:'40px' }}>
                <h1>NEW COLLECTION</h1>
                    <h2>Motorola g54 5G (Pearl Blue, 256 GB)(12 GB RAM)</h2>
                    4.266,962 Ratings & 6,366 Reviews
                   <h2> ₹15,999</h2>
                   Available offers
                  <p>
Bank OfferGet ₹25* instant discount for the 1st Gallaxy Order using  UPIT&C<br/>

Bank Offer5% Cashback on Gallaxy Axis Bank CardT&C<br/>

Special PriceGet extra ₹6000 off (price inclusive of cashback/coupon)T&C<br/>

FreebieSpotify Premium - 12M at ₹699T&C<br/>

Partner OfferSign-up for Gallaxy Pay Later & get free Times Prime Benefits worth ₹10,000<br/>

No cost EMI ₹2,667/month. Standard EMI also availableView Plans<br/>

Additional ₹1,000 off on Laptops on purchase of your recent Mobile PhoneT&C<br/>

Buy Mobile and Get Flat ₹500 Off on Moto TabletsT&C<br/>

Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later</p>
<div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '20px' }}>
                        <button style={{ width: '300px', height: '50px' }}>Add Cart</button>
                        <button style={{ width: '300px', height: '50px' }}>Buy now</button>
                    </div>           
                </div>
            </div>
        </>
    );
}
export default Singleproduct;