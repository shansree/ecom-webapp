import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allData from '../data.json';

export function Product1() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  if (!Array.isArray(allData.all)) {
    return <div>Error: Product data is not an array</div>;
  }

  return (
    <div>
      <div className='container mb-5'>
        <h2 className='text-center mt-5 mb-4'>
          <span className='border-red pe-2'>Flash</span> Sale
        </h2>

        <div className='row'>
          {allData.all.map(product => (
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
  );
}
