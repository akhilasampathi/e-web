import React from 'react';
import { BrowserRouter,Routes,Route,  } from 'react-router-dom';
import Header from './components/header/Header';
import Banner from './components/pages/Banner.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
// import Login from './components/Login.js';
import Sample from './components/content/Sample.js';
import Product from './components/products/Product.js';
import Singleproduct from './components/Singleproduct.js';
import Categorie from './components/categorie/Categorie.js';
import Registerform from './components/form/Registerform.js';
// import ProtectedRoute from './util/ProtectRouter.js';

import ProductComponent from './components/Productcomponent.js';
// import Card from './components/card/Card.js';
import Slideshow from './components/Slideshow.js';
import About from './components/About.js';
import Cooler from './components/Cooler.js';
import Offer from './components/offer/Offer.js';
import Discount from './components/discount/Discount.js';
import Logout from './components/logout/Logout.js';
import Filter from './components/filter/Filter.js';
import Computer from './components/laptop/Computer.js';
import Footer from './components/footer/Footer.js';
const App = () => {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/about" element={
           <About/>} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/registerform" element={ <Registerform/>} />
          <Route path="/categorie" element={ <Categorie />} />
          <Route path="/banner" element={ <Banner />} />
          <Route path="/sample" element={ <Sample />} />
           <Route index element={<Home/>} /> 
          <Route path="/product" element={ <Product/>} />
          <Route path="/singleproduct" element={ <Singleproduct/>} />
          
          <Route path="/prodcutcomponent" element={ <ProductComponent/>} />
          {/* <Route path="/card" element={ <Card/>} /> */}
          <Route path="/slideshow" element={ <Slideshow/>} />
          <Route path="/cooler" element={ <Cooler/>} />
          <Route path="/offer" element={<Offer/>}/>
          <Route path="/discount" element={<Discount/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/filter" element={<Filter/>}/>
          <Route path="/computer" element={<Computer/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
 </div>
  );
}
export default App;
