import React, { useRef } from 'react'
import ourImg from './../assets/cover.jpg'
import { useInView } from "motion/react"

export default function WhatWeDo() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div id='what-we-do' >
            <div
                ref={ref} style={{
                    transform: isInView ? "none" : "translateX(-400px)",
                    opacity: isInView ? 1 : 0,
                    transition: "transform 1s ,opacity 2s"
                }}

                className="container p-50">

                <div className='text-center'>
                    <h2 className='section-header mb-5'>
                        Who are we ?
                    </h2>
                </div>
                <div className="system-dark p-5">
                    <div className='row'>
                        <div className="col-lg-6 col-12 order-1 order-lg-0">
                            <div className="inner p-2">
                                <div>
                                    <p className='fs-5'>
                                        <p className="fs-5">
                                            We are a group of final-year students from the Computer Engineering department, brought together by a shared passion for technology and innovation. We decided to make our graduation project more than just an academic idea.
                                        </p>
                                        <p className="fs-5">
                                            Our project focuses on manufacturing prosthetic limbs using 3D printing, relying on recycled materials such as plastic from water bottles. The process begins with scanning the affected limb using a 3D scanner. Then, we recycle plastic bottles and convert them into raw material (filament) that can be used in a 3D printer to produce a precise and functional prosthetic limb.
                                            The idea behind the project is to combine technology with sustainability, offering a low-cost and high-quality alternative for people in need of prosthetics—especially in communities with limited resources.
                                            Through our project, we aim to prove that big solutions can start from simple ideas and effective execution, and that technology, when used with a human-centered approach, can truly change lives.
                                        </p>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-0 order-lg-1">
                            <div className="inner mt-4 d-flex ">
                                <div className='overflow-hidden rounded-4'>

                                    <img className='w-100' src={ourImg} alt="cover" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
