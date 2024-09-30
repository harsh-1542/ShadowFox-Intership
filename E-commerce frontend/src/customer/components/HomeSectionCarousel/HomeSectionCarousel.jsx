import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    // Function to move to the previous slide
    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Function to move to the next slide
    const slideNext = () => {
        if (activeIndex < items.length - Math.ceil(responsive[1024].items)) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };
    const navigate = useNavigate();

    // Function to sync the carousel's active index with state
    const syncActiveIndex = (e) => setActiveIndex(e.item);

    return (
        <div className='border' onClick={()=>navigate(`/product/${5}`)}>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5 text-left pl-8'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    responsive={responsive}
                    activeIndex={activeIndex}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}  // Syncs active index when slide changes
                />

                {/* Next Button */}
                {activeIndex !== items.length - 5 &&
                    <Button
                        variant="contained"
                        onClick={slideNext}
                        className='z-50 bg-white'
                        sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                }

                {/* Previous Button */}
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        onClick={slidePrev}
                        className='z-50 bg-white'
                        sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)', bgcolor: 'white' }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
