import React, { useRef } from 'react'
import { useInView } from "motion/react"
import prod1 from './../assets/prod/1.jpg'
import prod2 from './../assets/prod/2.jpg'
import prod3 from './../assets/prod/3.jpg'
import Filament from './../assets/prod/felmansvid.mp4'
import ReactPlayer from 'react-player'
export default function Product() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <div id='Product'>

            <div ref={ref} style={{
                transform: isInView ? "none" : "translateX(-400px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ,opacity 2s"
            }}
                className="container h-100 p-50">


                <div className=" h-100">
                    <div className='text-center'>
                        <h2 className='section-header mb-30'>
                            Filament product
                        </h2>
                    </div>

                    <div className="system-dark py-5 px-4">

                <h2 className='text-center  mb-30'> Step-by-Step Filament Production Process</h2>
                <div className="div">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-1 order-lg-0">
                            <div className="inner fs-5 p-3 ">
                            <p><strong>1. Feeding the Plastic Bottle:</strong> The bottle is cut into a continuous thin strip, either manually or via a mounted cutting tool.</p>
                        <p><strong>2. Melting the Plastic Strip:</strong> The strip is fed into an electrically heated extruder, typically set between 180–220°C depending on the plastic type. Inside the extruder, the strip melts and is pushed through a small nozzle.</p>
                        <p><strong>3. Forming the Filament:</strong> The melted plastic exits the nozzle as a thin, uniform filament. Air or water cooling may be applied immediately to solidify its shape.</p>
                        <p><strong>4. Pulling and Spooling:</strong> A motor-driven spool pulls the filament steadily and winds it evenly onto a reel, forming a ready-to-use filament roll.</p>
                        <p><strong>5. Continuous Recycling:</strong> This process can be repeated to produce large quantities of filament from otherwise discarded plastic bottles.</p>

                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="inner">
                            <ReactPlayer url={Filament}
                          playing={isInView ? true : false}
                         controls={true}
                         width="100%"
                         height="auto"
                         loop={true}


                />
                            </div>
                        </div>
                    </div>
                </div>

                    </div>

                    <div className="row  position-relative">
                        <div className="col-lg-6 col-12">
                            <div className="product-card   h-100 p-3">
                                <div className="inner d-flex system-dark h-100 p-3 rounded-4">
                                    <div className='product-img'>
                                        <img className='w-100' src={prod1} alt="product" />
                                    </div>
                                    <div className="product-details p-3">
                                        <h2>
                                            Lorem, ipsum.
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, accusantium.

                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="product-card   h-100 p-3">
                                <div className="inner d-flex system-dark h-100 p-3 rounded-4">
                                    <div className='product-img'>
                                        <img className='w-100' src={prod2} alt="product" />
                                    </div>
                                    <div className="product-details p-3">
                                        <h2>
                                            Lorem, ipsum.
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, accusantium.

                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="product-card   h-100 p-3">
                                <div className="inner d-flex system-dark h-100 p-3 rounded-4">
                                    <div className='product-img'>
                                        <img className='w-100' src={prod2} alt="product" />
                                    </div>
                                    <div className="product-details p-3">
                                        <h2>
                                            Lorem, ipsum.
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, accusantium.

                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="product-card   h-100 p-3">
                                <div className="inner d-flex system-dark h-100 p-3 rounded-4">
                                    <div className='product-img'>
                                        <img className='w-100' src={prod3} alt="product" />
                                    </div>
                                    <div className="product-details p-3">
                                        <h2>
                                            Lorem, ipsum.
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, accusantium.

                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="product-animat text-center d-lg-flex d-none justify-content-center align-items-center text-white">

                            <i className="fa-solid fa-rotate fa-3x" />


                        </div>
                    </div>



                </div>



            </div>





        </div>
    )
}
