import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import { NavLink } from 'react-router-dom';

const Cards = (props) => {

    const cardFrames = [        
        { transform: 'translateY(0%)', border: '1px solid #ffd700'},
        { transform: 'translateY(1%)', border: '1px solid #ff0000'},
        { transform: 'translateY(2%)', border: '1px solid #00ff00'},
        { transform: 'translateY(2.5%)', border: '1px solid #0000ff'},
        { transform: 'translateY(3%)', border: '1px solid #ffd700'},
    ];
    
    const cardTiming = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }

    const cardMove = useWebAnimations({
        keyframes: cardFrames,
        timing: cardTiming,
    });

    return (
        <>
            <section className="col-md-4 col-10 mx-auto">
                <div id="cardanim" className="card" ref={cardMove.ref} >
                    <img src={props.imgsrc} className="card-img-top" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cards;