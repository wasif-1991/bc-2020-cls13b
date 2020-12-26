import React from 'react';
import image from '../src/images/USF-Dev.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
        <Common name='Find all your e-business needs at'
        imgsrc={image}
        visit='./services'
        btname='See Our Services'
        description='We have a library of award-winning and legendary developers for all types of development. These developers are dedicated and willing to work day and night to make your project a success.'
        />
        </>
    );
}

export default Home;