import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import CarCategories from './CarCategories/CarCategories';
import ExtraSection from './ExtraSection/ExtraSection';
import FeaturedCars from './FeaturedCars/FeaturedCars';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FeaturedCars></FeaturedCars>
            <CarCategories></CarCategories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;