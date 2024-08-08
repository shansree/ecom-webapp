import React from 'react';
import Header from './header';
import Product, { Product1 } from './product';
import image1 from '../assets/images/image1.jpg';
import images from '../assets/images/images.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import ImageCarousel from './banner';
import Footer from './footer';
import Home from '../pages/home';
import Checkout from './checkout';


function Layout() {
  return (
    <div>
    <Header />
     <Home/>
    <Footer/>
    </div>
  );
}

export default Layout;
  {/* <div className='d-flex justify-content-around'>
        <Product title='Shirt' id='1' image={image1} />
        <Product title='Kurthi' id='2' image={images} />
        <Product title='Shut' id='3' image={image4} />
        <Product title='TShirt' id='4' image={image3} />
        
      </div> */}