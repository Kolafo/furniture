import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Info from './Info';

const furnitureData = [
  {
    id: 1,
    name: 'Sofa',
    description: 'Comfortable sofa for your living room',
    price: 500,
    imageUrl: './sofa1.jpg'
  },
  {
    id: 2,
    name: 'Chair',
    description: 'Elegant chair for your office',
    price: 150,
    imageUrl: './chair1.jpg'
  },
  {
    id:3,
    name: 'Table',
    description: 'Stylish table for your diningitory',
    price: 250,
    imageUrl: './table1.jpg'
  }
  // Добавьте больше элементов по мере необходимости
];
function FurnitureCarousel() {
  // const [furniture, setFurniture] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/furniture')
  //     .then(response => {
  //       setFurniture(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  
  return (
    <div>
        <div className="carousel-container">
          <Slider {...settings}>
            {furnitureData.map(item => (
              <div className="furniture-card" key={item.id}>
                <img className="furniture-image" src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      <Info />
    </div>
  );
}

export default FurnitureCarousel;