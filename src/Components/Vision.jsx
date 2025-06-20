import { useInView } from 'motion/react'
import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

import scanaAI from './../assets/video/scan-AI.mp4'


export default function Vision() {

    const ref = useRef(null)

    const isInView = useInView(ref)

    return (
        <div id='vision' >
            <div ref={ref} 
                className={`container p-50  ${isInView? 'custom-ani-d':'custom-ani-e'}`}>
                    <div className='text-center'>
                    <h2 className='section-header mb-4 '>
                        Our Future Vision
                    </h2>
                </div>
                

                <div className="system-dark p-1 p-lg-4">
                
                <div className="row">
                    <div className="col-12 order-1 order-lg-0 col-lg-6"><div className="inner px-1">

                        <p className='px-1 py-3 p-lg-3'>
                            <span className='fw-bold'>We hope</span> that our future work will be to develop and add new technology that enhances the quality of the current system. Below we present some future scenarios for developing the project: First, in order to have the best possible quality for the STL files through the 3D Scanner, the next application will be the scanning process through the camera of the personal mobile phone or the iPad, through an electronic part consisting of an infrared sensor that is installed on the camera and the process begins
                            This will provide us with what is missing in the current 3D Scanner, which used to do its job with small parts that fit its size and the ability of the motor to carry these parts and rotate in them, as the new part will enable us to perform the scanning process for any object with much greater ease. It will also use artificial intelligence algorithms in order to convert the images into an STL file.
                        </p>

                    </div>
                    </div>
                    <div className="col-12 col-lg-6 order-0 order-lg-1"><div className="inner">
                    <ReactPlayer url={scanaAI}
                    playing={isInView ? true : false}
                    muted = {true}
                    controls={true}
                    width="100%"
                    height="auto"


                />
                    </div>
                    </div>
                </div>
                </div>

               







            </div>

        </div>
    )
}
