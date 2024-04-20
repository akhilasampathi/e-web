import React from 'react';
import Categorie from './categorie/Categorie';
import './Home.css'
import Banner from './pages/Banner';
import Sample from './content/Sample';
import Header from './header/Header';
// import ProductComponent from './Productcomponent';
import Product from './products/Product';
import Cooler from './Cooler';
import Offer from './offer/Offer';
import Discount from './discount/Discount';
import Footer from './footer/Footer';

// import Laptop from './laptops/Laptop';
const Home = () => {
  return (
    <div>
     <div>
      <Header/>
     </div>
      <div className='pages'>                                       
      <Categorie/>
      <Banner/>
      <Sample/>
      <Product/>
     <Cooler/>
     <Offer/>
     <Discount/>
    
     {/* <ProductComponent/> */}
     <Footer/>
    
     {/* <Laptop/> */}
     </div>
    </div>
  );
}
export default Home;
