import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/style.css'
import { FaUser, FaShoppingCart } from 'react-icons/fa';
export default function Header() {

  const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate()

  const location = useLocation();
 

  const isActive = (path) => location.pathname === path;
  return (
    //     <div>
    //        <nav className="navbar navbar-expand-sm bg-dark">

    // <div className="container-fluid">

    //   <ul className="navbar-nav">
    //     <li classNameName="nav-item">
    //       <a className="nav-link text-primary" href="#">Link 1</a>
    //     </li>

    //   </ul>
    //   <Link to="/Checkout">

    //   <h2 className='text-primary'>cart <small>{cartItems.length}</small></h2></Link>
    // </div>

    // </nav>
    //     </div>
    <>
    <div className='container mb-2'>
   <nav className="navbar navbar-expand-md navbar-light bg-white">
  <div className="container-fluid p-0">
    
    <a className="navbar-brand text-uppercase fw-800" href="#">
      <span className="border-red pe-2">New</span>Product
    </a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#myNav"
      aria-controls="myNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      
      <span className="fas fa-bars" />
      
    </button>
    <div className="collapse navbar-collapse" id="myNav">
      <div className="navbar-nav ms-auto">
        
        <a className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={ () => navigate('/')} aria-current="page">
          Home
        </a>
        
        <a className={`nav-link ${isActive('/Womens') ? 'active' : ''}`} onClick={ () => navigate('/Womens')}>
          Women's
        </a>
        
        <a className={`nav-link ${isActive('/Mens') ? 'active' : ''}`} onClick={ () => navigate('/Mens')}>
          Men's
        </a>
        
        <a className={`nav-link ${isActive('/Kids') ? 'active' : ''}`} onClick={ () => navigate('/Kids')}>
          Kid's
        </a>
        
        <a className={`nav-link ${isActive('/Accessories') ? 'active' : ''}`} onClick={ () => navigate('/Accessories')}>
          Accessories
        </a>
        
        <a className={`nav-link ${isActive('/Cosmetics') ? 'active' : ''}`} onClick={ () => navigate('/Cosmetices')}>
          Cosmetics
        </a>

        <span className='d-flex  align-items-center  ms-4'>
        <FaUser size={23} color="black" className='me-3' />
        <Link to="/Checkout" className='text-decoration-none'>
        <FaShoppingCart size={23} color="black" className='text-decoration-none' /><small className='bag-no'>{cartItems.length}</small>
        </Link>
        </span>
        
      </div>
    </div>
  </div>
 
</nav>


</div>

    </>
  );
}
