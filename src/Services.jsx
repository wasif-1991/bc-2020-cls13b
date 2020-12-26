import React from 'react';
import USFData from './USFData';
import Cards from './Cards';

const Services = () => {

    return (
        <>
            <section className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </section>

            <section className="container-fluid mb-5">
                <section className="row">
                    <section className="col-10 mx-auto">
                        <section className="row gy-3">
                            {USFData.map((val, ind) => {
                                    return <Cards key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    desc={val.description}
                                    />
                                })}
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Services;