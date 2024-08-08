import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import allData from '../data.json';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Kids = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  if (!Array.isArray(allData.kids)) {
    return <div>Error: Product data is not an array</div>;
  }
  return (

    <>
    <Header/>
    <div>
      <div className='container mb-5'>
        <h2 className='text-center mt-5 mb-5'>
          <span className='border-red pe-2'>Tiny</span>Trends The Latest in Kids' Dress
        </h2>

        <div className='row'>
          {allData.kids.map(product => (
            <div key={product.id} className='col-12 col-sm-8 col-md-6 col-lg-4'>
              <div className='card'>
                <img
                  className='card-img'
                  src={product.imageUrl}
                  alt={product.title}
                />
                <div className=''>
                  <a href={product.link} className='card-link text-danger like'>
                    <i className='fas fa-heart' />
                  </a>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>{product.title}</h4>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {product.subtitle}
                  </h6>
                  <p className='card-text'>
                    {product.description}
                  </p>
                  <div className='buy d-flex justify-content-between align-items-center'>
                    <div className='price text-success'>
                      <h5 className='mt-4'>{product.priceINR}</h5>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className='btn bg-btn mt-3'>
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
  )
}

export default Kids