import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname:'',
        fullemail:'',
        phonenum:'',
        message:'',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((prevVal) => {
            return{
                ...prevVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (norefresh) => {
        norefresh.preventDefault();
        alert(`Thanks for the submission. Following are the information we received:
        ---------------------------------------
        Name: ${data.fullname},
        ---------------------------------------
        Email: ${data.fullemail},
        ---------------------------------------
        Phone: ${data.phonenum},
        ---------------------------------------
        Message: Phone: ${data.message}
        ---------------------------------------`);
    };

    return (
        <>
            <section className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </section>

            <section className="container contact-form">
                <section className="row">
                    <section className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="InputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="InputName" 
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter Your Name" />                                
                            </div>

                            <div className="mb-3">
                                <label for="InputEmail" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="InputEmail"
                                name="fullemail"
                                value={data.fullemail}
                                onChange={InputEvent}
                                placeholder="Enter Your Email" />                                
                            </div>

                            <div className="mb-3">
                                <label for="EnterPhoneNumber" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="EnterPhoneNumber"
                                name="phonenum"
                                value={data.phonenum}
                                onChange={InputEvent}
                                placeholder="Enter Your Phone Number" />                                
                            </div>

                            <div className="mb-3">
                                <label for="EnterMessage" className="form-label">Message</label>
                                <textarea className="form-control" id="EnterMessage" row="3"
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                placeholder="Enter Your Message">                                
                                </textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-danger" type="submit">Submit form</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Contact;