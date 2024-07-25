import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'
import Info from './Info'
import furnitureData from './furniture.json'; 

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

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

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
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	}

	return (
		<>
        <div className={`carousel-container ${isAnimated ? 'animated' : ''}`}>
          <Slider {...settings}>
            {furnitureData.map(item => (
              <div className='furniture-card' key={item.id}>
                <img
                  className='furniture-image'
                  src={item.imageUrl}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </Slider>
        </div>
			<Info />
		</>
	)
}

export default FurnitureCarousel
