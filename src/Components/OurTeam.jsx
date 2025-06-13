import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "motion/react"
import Slider from "react-slick";
import abdo from "./../assets/teamImgs/Abdo.jpg";
import mohammedElsayed from './../assets/teamImgs/mohamed-elsayed.jpg'
import ahmedEbrahim from './../assets/teamImgs//ahmed-ebrahim.jpg'
import MazenAhmed from './../assets/teamImgs/Mazen-Ahmed.jpg'
import ziad from './../assets/teamImgs/ziad.jpg'
import eman from './../assets/teamImgs/eman.jpg'
import hosny from './../assets/teamImgs/hosny.jpg'
import khald from './../assets/teamImgs/khald.jpg'
import mosa from './../assets/teamImgs/mosa.jpg'
import rashidy from './../assets/teamImgs/Rashidy.jpg'
import aya from './../assets/teamImgs/aya.jpg'
import osama from './../assets/teamImgs/osama.jpg'




export default function OurTeam() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const ref = useRef(null);
    const isInView = useInView(ref);


    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var snSettings = {

        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


    };



    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);


    return (

        <div id='our-team'>
            
            <div ref={ref} style={{
                transform: isInView ? "none" : "translateX(-400px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ,opacity 2s"
            }}
             className="container  p-50">
                <div className='text-center text-white mb-3'>
                    <h2 className='section-header'>
                        Our Team
                    </h2>
                </div>
                
                <div className="system-dark p-5 ">
                
                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...snSettings}>
                    <div className="inner px-3 ">
                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className=" rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={abdo} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Abdo Mohammed
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/18zcLahiSV/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/abdo-mohammed-82b166321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:abdo.mohammed.pc@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Front-End Developer
                                            </span>
                                            <p className='mt-2'>

                                                Passionate and detail-oriented front-end developer with hands-on experience in building modern, responsive, and user-friendly web interfaces. Skilled in HTML & CSS , JavaScript , React.js , Next.js , Tailwind CSS , Bootstrap , jQuery , Axios , TanStack Query , and React Router DOM . I've worked on multiple real-world projects where I implemented dynamic UI components, responsive layouts, and seamless user experiences. I enjoy writing clean, maintainable code and continuously learning new technologies in the ever-evolving web development ecosystem.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner h-100 px-3 ">

                        <div className='team-card  p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={mohammedElsayed} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Mohamed Elsayed
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/18juuV1AxY/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/mohamed-alsayed-256051315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:mohamed20200112@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>




                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Mobile application developer
                                            </span>
                                            <p className='mt-2'>

                                                I Completed Study of The Cisco Certified Network Associate (CCNA) And Linux Fundamentals And Object Oriented Programming Based on JAVA And Completely Studying The Microsoft Certified Solutions Associate (MCSA), Currently I've Completed The Dart Language, Flutter To Be Mobile Application Developer For Android and Ios And   personal skills include training in providing recipes for projects (Presentation Skills)
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={ahmedEbrahim} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Ahmed Ibrahim
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/1B2s7YBZQM/?mibextid=wwXIfr"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/ahmed-ibrahim-49428726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:ahmed227407@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Artificial Intelligence developer
                                            </span>
                                            <p className='mt-2'>

                                                I have taken several courses in Artificial Intelligence, Data Analysis, and Data Science, which helped me build a strong understanding of how to extract insights from data and make data-driven decisions.
                                                I’ve also studied Python as a core programming language for data science applications, and I continue to expand my knowledge in machine learning and AI tools to stay updated with the fast-evolving tech landscape.
                                                I’m passionate about turning raw data into meaningful solutions that drive innovation and impact.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={MazenAhmed} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Mazen Ahmed
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/1FffbKbwhB/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/mazen-elhalawany-a89a2a29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:mazen52404@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>




                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Mobile application developer
                                            </span>
                                            <p className='mt-2'>

                                                I have studied CCNA, Linux fundamentals,Java and OOP to gain a strong base in networking and programming.
                                                Currently, I’m a Junior Flutter Developer building cross-platform mobile applications using Dart.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={ziad} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Ziad Tarek
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/1Dhwn2w1JR/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>
                                            <a href="mailto:zeyadtarek0123@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Mobile application developer
                                            </span>
                                            <p className='mt-2'>

                                                I'm in the Faculty of Engineering, Communications Department, Computers Division.
                                                I studied CCNA, and I studied Object-Oriented Programming in Java.
                                                I also studied the Dart language and the Flutter framework.
                                                Now, I'm working in mobile application development.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={eman} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Eman Mahmoud
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/16QTe2v1Qt/?mibextid=wwXIfr"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/eman-mahmoud-a54854239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:em971545@gmail.com "><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Front-End Developer
                                            </span>
                                            <p className='mt-2'>

                                                I am a Front-End Developer with hands-on experience in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks React. I’ve completed several practical projects and enhanced my skills through specialized courses in front-end technologies. I focus on creating visually appealing, accessible, and high-performance web experiences, with a strong understanding of UI/UX principles.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={aya} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Aya Essam
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100057069086851&mibextid=ZbWKwL"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/aya-essam-977548342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>

                                            <a href="mailto:ayae26728@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Front-End Developer
                                            </span>
                                            <p className='mt-2'>

                                                A final-year Computer Engineering student with strong skills in HTML, CSS, JavaScript, and React. Aya has a passion for creating intuitive user interfaces and has contributed to several web-based features of the project, including the user-friendly printing interface. She’s also interested in UI/UX design and continuously explores ways to improve the user experience.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={hosny} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Mohammed Hosny
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/16JtNGmNdD/?mibextid=wwXIfr"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>


                                            <a href="mailto:mh9732694@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>CCNA Developer
                                            </span>
                                            <p className='mt-2'>

                                                I have studied CCNA, Linux
                                                fundamentals,Java and OOP to gain a strong base in networking and programming.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={khald} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Khaled Elkhamisy
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/khaledgalal.alkamisy"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/khaled-elkhamisy-823bbb231"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>


                                            <a href="mailto:khaledelkhamisy475@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Mobile application developer
                                            </span>
                                            <p className='mt-2'>

                                                I specialize in building cross-platform mobile applications using Flutter, with a strong focus on clean architecture, performance optimization, and seamless user experience. I have practical experience in integrating REST APIs, Firebase services, local storage (like GetStorage), and implementing secure authentication systems.


                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={mosa} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Ahmed mahmoud
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/19CeumwhSv/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a href="mailto:edawaly56@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Cyber security developer
                                            </span>
                                            <p className='mt-2'>

                                                I have completed several key certifications, including Cisco Certified Network Associate (CCNA), Offensive Security Certified Professional (OSCP), and Web Application Penetration Testing. These courses have given me a solid foundation in networking, offensive security, and web application vulnerabilities. I’ve also worked on hands-on labs and real-world scenarios that enhanced my practical skills. I'm currently looking for an opportunity to apply my knowledge and continue growing in a professional cyber security environment.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={rashidy} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Ahmed Rashid
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/198jtDakpA/?mibextid=wwXIfr"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>

                                            <a target='_blank' href="https://www.linkedin.com/in/ahmed-rashid-5893032b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin fa-2xl me-4" /></a>


                                            <a href="mailto:ahmedrashid.1234554@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Cyber security developer
                                            </span>
                                            <p className='mt-2'>

                                                I have completed several key certifications, including Cisco Certified Network Associate (CCNA), Offensive Security Certified Professional (OSCP), and Web Application Penetration Testing. These courses have given me a solid foundation in networking, offensive security, and web application vulnerabilities. I’ve also worked on hands-on labs and real-world scenarios that enhanced my practical skills. I'm currently looking for an opportunity to apply my knowledge and continue growing in a professional cyber security environment.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="inner px-3 ">

                        <div className='team-card p-3 d-flex rounded-4'>
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className="rounded-4 overflow-hidden mb-3">
                                            <img className='w-100' src={osama} alt="img" />
                                        </div>
                                        <h4 className='fw-bold'>
                                            Osama Mohamed
                                        </h4>
                                        <div className='mt-2 card-icons'>
                                            <a target='_blank' href="https://www.facebook.com/share/17hjFqnUYw/"><i className="fa-brands fa-facebook fa-2xl me-4"></i></a>


                                            <a href="mailto:omoghazy7@gmail.com"><i className="fa-solid fa-envelope fa-2xl " /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7">
                                    <div className=' mt-3 card-info d-flex flex-column justify-content-between'>
                                        <div className=''>
                                            <span className='fs-4 fw-bold'>Software Developer
                                            </span>
                                            <p className='mt-2'>

                                                Stydying Some Programming Languages ( C , Java , C# )
                                                And Now I study Python
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>






                </Slider>
                <div className='mt-3'>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings}

                    >
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={abdo} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Abdo Mohammed
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={mohammedElsayed} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Mohamed Elsayed
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={ahmedEbrahim} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Ahmed Ibrahim
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={MazenAhmed} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Mazen Ahmed
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={ziad} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Ziad Tarek
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={eman} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Eman Mahmoud
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={aya} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Aya Essam
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={hosny} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Mohammed Hosny

                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={khald} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Khaled Elkhamisy

                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={mosa} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Ahmed mahmoud

                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={rashidy} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Ahmed Rashid

                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className="inner px-2">
                            <div className='team-card p-3 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="imge-sec-card overflow-hidden">
                                        <img className='w-100' src={osama} alt="img" />
                                    </div>
                                    <h5 className='ms-3 fw-bold'>
                                        Osama Mohamed

                                    </h5>
                                </div>

                            </div>
                        </div>





                    </Slider>
                </div>

                </div>

                

            </div>





        </div>

    )
}
