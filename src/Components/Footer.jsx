import React from 'react'
import logo from './../assets/logo-2.png'

export default function Footer() {
    return (
        <div className='py-4 footer system-dark rounded-0'>
            <div className="container">
                <div className="d-flex flex-column flex-lg-row align-items-center  justify-content-between ">
                    <div className="col-lg-4 col-12">
                        <div className="inner d-flex flex-column justify-content-center  align-items-center ">
                            <img className=' logo-img' src={logo} alt="logo img" />
                            <p className='mt-3'>I3M FULL SYSTEM OF 3D Printer </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h4 className=' mb-4'>
                                Contact us by 
                            </h4>
                        </div>
                        <div className="inner footer-icons d-flex flex-column justify-content-between align-items-baseline text-center">

                        <a  target='_blank' href="https://wa.me/+201095412871"><i className="fa-brands fa-facebook fa-2xl me-2 mb-2" />Facebook</a>
                        <a  target='_blank' href="https://wa.me/+201095412871"><i className="fa-brands fa-square-whatsapp fa-2xl  mb-2 me-2"  />WhatsApp</a>
                        <a  target='_blank' href="https://wa.me/+201095412871"><i className="fa-solid fa-envelope fa-2xl me-2 mb-2" />Gmail</a>

                            

                            
                            



                        </div>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <p className='m-0'>
                        <span className='fw-bolder'>©</span> 2025 <span className='fw-bolder'>El-Salkeen Team</span> right reserved
                    </p>
                </div>
            </div>

        </div>
    )
}
