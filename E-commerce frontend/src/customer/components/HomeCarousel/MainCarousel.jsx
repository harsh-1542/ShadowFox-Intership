import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> <img src={item.image} className='cursor-pointer' role='presentation' alt=''/>)
   return(
       <AliceCarousel
       mouseTracking
       items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
       // responsive={responsive}
       
       />
    )
};

export default MainCarousel;