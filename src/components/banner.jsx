import React from 'react';
import Slider from 'react-slick';
import image from '../assets/images/4689942.jpg'
// import image1 from '../assets/images/imagesB1.jpg'
// import image2 from '../assets/images/5200386.jpg'
import image3 from '../assets/images/8852975.jpg'


const imageItems = [
  { id: 1, src: image, alt: 'Image 1' },
//   { id: 3, src: image2, alt: 'Image 3' },
  { id: 4, src: image3, alt: 'Image 4' },
//   { id: 5, src: image, alt: 'Image 5' }
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    
    autoplaySpeed: 200, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imageItems.map(item => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className="carousel-image banner_img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
