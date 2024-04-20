import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import gl from '../images/gl.jpg';
import hello from '../images/sello.png';
// import {Outlet,useLocation} from 'react-router-dom'//where is login form in application
import Card from '../card/Card';
const Header = () => { 
   // const location = useLocation()
   // const {pathname} = location
   // if(pathname !== "/login" && pathname !== '/registerform'){
  return (
   <>
     <div className="Header">  
     <div className="image">  
     <div class="ih">
  <img src={gl} alt=" placeholder" style={{width:'100px',height:'100px'}} />
  <h2>Gadget Gallaxy</h2> 
      </div>
     </div>
      <ul className="list">
      <li id="one"> <Link to="/">HOME</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      
      {/* <li><Link to="/">Login</Link></li>  */}
      </ul>
      <Card/>
      <div className="img-container">
      <img src={hello} alt=" placeholder" style={{width:'60px',height:'80px'}} />
      </div>
      </div>
      <div>
      </div>
      </>
  );
   // }else{
   //    return (
   //       <div>
   //            <Outlet />
   //       </div>
   //    )
   // }
}
export default Header;
 