import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        id: 1,
        prev: 3,
        next: 2
    },
    {
        image: img2,
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: img3,
        id: 3,
        prev: 2,
        next: 1
    }

]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem 
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;