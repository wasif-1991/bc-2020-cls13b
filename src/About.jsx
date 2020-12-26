import React from 'react';
import image2 from '../src/images/USF-Dev2.svg';
import Common from './Common';

const About = () => {
    return (
        <>
        <Common name='What We Achieve as '
            imgsrc={image2}
            visit='./contact'
            btname='Contact Now'
            description='We are passionate about what we do and have the skills to deliver on time, every time, giving you peace of mind and a great looking website that works the way you want it to. Our Word Speaks For Itself!'
        />
        </>
    );
}

export default About;