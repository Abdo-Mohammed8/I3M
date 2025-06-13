import React, { useEffect, useRef } from 'react'
import prenter from './../assets/printer.jpg'
import heater from './../assets/heater.jpg'
import scanar from './../assets/scaner.jpg'


import Slider from 'react-slick'
import { useInView } from 'motion/react'

export default function OurSystem() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        cssEase: "linear",

    };
    return (
        <div id='our-system' className='bg-section'>

            <div className={`container p-50 ${isInView? 'custom-ani-d':'custom-ani-e'}`}
                >

                <div className='text-center text-white'>
                    <h2 className='section-header mb-4'>
                        Our System
                    </h2>
                </div>


                <div className="system-dark p-4">


                    <div className="row">
                        <div className='col-lg-6 col-12 py-5 py-lg-0 '>
                            <div className="inner px-3 img-container">
                                <Slider {...settings}>

                                    <div>
                                        <img className='w-100' src={heater} alt="genral System" />
                                    </div>
                                    <div>
                                        <img className='w-100' src={scanar} alt="genral System" />
                                    </div>
                                    <div>
                                        <img className='w-100' src={prenter} alt="genral System" />
                                    </div>
                                </Slider>

                            </div>
                        </div>
                        <div className='col-lg-6 col-12 py-5 py-lg-0'>
                            <div className="inner system-parts overflow-y-auto fs-5  px-3">
                                <p>
                                    1. Input of Plastic Water Bottles
                                    Empty water bottles made from PET (Polyethylene Terephthalate)—one of the most common types of plastic—are collected. These bottles are thoroughly cleaned to remove any impurities and then fed into a specialized shredding machine.

                                </p>
                                <p>
                                    2. Shredding the Bottles into Plastic Flakes
                                    The bottles enter a shredder machine, where they are cut into small pieces or flakes. These flakes serve as the raw material for producing printable filament in later stages.

                                </p>
                                <p>
                                    3. Producing 3D Printing Filament
                                    The plastic flakes are then fed into an extruder machine, which heats the flakes until they melt and pushes the material through a fine nozzle. The result is a long, thin filament with a consistent diameter. This filament is cooled, wound onto a spool, and made ready for use in a 3D printer.

                                </p>
                                <p>
                                    4. Scanning the Residual Limb with a 3D Scanner
                                    A 3D scanner is used to scan the patient’s residual limb—whether it's an arm or leg—to obtain an accurate 3D digital model that reflects the real dimensions of the limb. This model is a crucial step in designing a prosthetic that fits the user precisely.

                                </p>
                                <p>

                                    5. Designing the Prosthetic Based on the Digital Model
                                    After obtaining the model, it is imported into CAD software such as Fusion 360 or Tinkercad. There, the prosthetic limb is designed to fit the scanned limb perfectly. The design is fully customizable to meet individual user needs, taking into account factors like comfort, balance, and ease of use.

                                </p>
                                <p>
                                    6. 3D Printing the Prosthetic Limb
                                    Once the design is finalized, the file is sent to a 3D printer, which uses the recycled filament to print the prosthetic limb layer by layer until the final product is formed. The printed limb is then inspected for quality, and small adjustments may be made to ensure a perfect and comfortable fit for the user.

                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
