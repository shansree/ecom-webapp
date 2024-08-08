import React from 'react'
import mainc from '../assets/images/mainc-1.jpg'
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import { toast } from 'react-toastify';
import allData from '../data.json';

const Saleproduct = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.success('Added to cart!');
    };
  
    if (!Array.isArray(allData.all)) {
      return <div>Error: Product data is not an array</div>;
    }
  return (
  <>
  <section className="my-5">
  <div className="container">
    <h2 className="hotpick_h1 text-center my-5">Hot Picks For You</h2>
    <div className="row">
    {allData.pro2.map(product => (
      <div key={product.id} className="col-lg-3">
        <div className="navcol">
          <div className="position-relative">
            <img
              className="w-100"
              src={product.imageUrl}
              alt="product_img"
            />
            <span className="discount position-absolute">50% OFF</span>
            <span className="like_icon">
              {/* <i className="far fa-heart p-0 position-absolute bg-white" /> */}
              <CiHeart className='p-0 position-absolute bg-white like_icon'/>
            </span>
          </div>
          <div className="tab_contents mb-4">
            <ul className="tab_circle d-flex p-0 my-3">
              <li className="color1" />
              <li className="color2" />
              <li className="color3" />
              <li className="color4" />
            </ul>
            <h6 className="tab_h1">{product.subtitle}</h6>
            <h6 className="tab_h2">{product.title}</h6>
            <div className='d-flex justify-content-between   align-items-center'>
                <div>
              <span className="tab_price">{product.priceINR}</span>
              <span className="tab_price1">$30.00</span>
              </div>
              <div>
                <button  onClick={() => handleAddToCart(product)} className='btnp2' >add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>

  </>
  )
}

export default Saleproduct