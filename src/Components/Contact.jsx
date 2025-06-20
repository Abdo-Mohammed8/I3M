import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import email from './../assets/email.gif'
import email1 from './../assets/email-1.png'
import emailjs from '@emailjs/browser';
import { useInView } from 'motion/react';

export default function Contact() {
    const form = useRef();
    let [flag, setFlag] = useState(false)
    const ref = useRef(null);
    const isInView = useInView(ref);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_b13dcro", "template_1bsae4n", form.current, {
            publicKey: 'UUL9ISEDbxmAcbZJ_',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully')
                    setFlag(true)
                    console.log(form.current);


                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(error.text)
                    setFlag(false)
                },
            );
    };

    useEffect(() => {
        setTimeout(() => {
            setFlag(false)
        }, 3000)

    }, [flag])

    return (
        <div id='contact' className='primary-section'>
            <div className={`container p-50 ${isInView? 'custom-ani-d':'custom-ani-e'}`}
                ref={ref} >
                <div className='text-center text-white'>
                    <h2 className='section-header mb-5'>
                        Email Us
                    </h2>
                </div>
                <div className="system-dark p-1 p-lg-5">
                    <div className='row'>

                        <div className="col-lg-7 ">
                            <div className="inner h-100 d-flex justify-content-center align-items-center p-1 p--lg-3">
                                <img src={flag ? email : email1} alt="email-image" />
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center align-items-center mt-4">
                            <div className="inner w-100 ">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <div className='mb-3'>
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                            <input type="text" name="user_name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>

                                            <input type="email" name="user_email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Massage</label>
                                            <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <input type="submit" value="Send" className='btn btn-success' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
