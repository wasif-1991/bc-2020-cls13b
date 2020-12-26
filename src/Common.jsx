import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import { NavLink } from 'react-router-dom';

const Common = (props) => {

    const imgUpFrames = [
        { transform: 'translateY(-4%)'},
        { transform: 'translateY(-2%)'},
        { transform: 'translateY(0%)'},
    ];
    
    const imgTiming = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }

    const ImgMove = useWebAnimations({
        keyframes: imgUpFrames,
        timing: imgTiming,
    });

    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <section className="container-fluid ">
                    <section className="row">
                        <section className="col-10 mx-auto">
                            <section className="row">
                                <section className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name}
                                        <strong className="brand-name"> Upshot Firm</strong>
                                    </h1>

                                    <h2 className="my-3">
                                        {props.description}
                                    </h2>

                                    <section className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-get-started">
                                            {props.btname}
                                        </NavLink>
                                    </section>                                    
                                </section>
                                
                                <section className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img className="img-fluid" src={props.imgsrc} ref={ImgMove.ref} alt="Common Image" />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

            </section>
        </>
    );
}

export default Common;