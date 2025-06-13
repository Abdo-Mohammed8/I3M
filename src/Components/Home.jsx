
import React, {useRef } from 'react'
import { useInView } from 'motion/react'
export default function Home() {


  const ref = useRef(null)
  const isInView = useInView(ref)
  
  return (
    <div id='home'>
      <div className='container'>
      <div  className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className='animat-header text-white text-center '
        ref={ref}  style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ?"none":"translateX(-500px)",
          transition: "all 1s"
                 }}
        >
        <h1 className='fs-3 text-white'>Innovation and design of a SMART Machine for Medical Prosthetics Manufacturing based on AI and 3D Printing technologies using recycled plastic bottles.</h1>
        <span className='animat fs-2 text-white'>|</span>
        </div>
     </div>
      
    </div>
    </div>
    
  )
}
