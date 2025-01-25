import HomeFirstImg from "./assets/homeFirstImg.jpg";
import HomeHeader from "./HomeHeader.jsx";
import { numWithText } from './imagesDetails.js';
import heroImgTwo from './assets/Events Section.jpeg';
import heroImgThree from './assets/Achievements Column.jpeg';
import aboutUsBG from './assets/about us bg.png';
import { FooterSection } from "./App";
import {numWithText2} from './imagesDetails.js';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import  EventPage from "./assets/News Section image one.png";
import achiveMentImage from "./assets/Events Section image two.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SecondHome() {
    
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-out', 
            once: false,
        });
        window.scrollTo(0, 0);
    }, []);

    const images = [
        HomeFirstImg,  
        heroImgTwo,     
        heroImgThree
];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    // CHANGED: Function to manually go to next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };
    
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };
    

    return (
        <div className="about-us">
            <HomeHeader />
            <div className="container-fluid text-dark position-relative p-0" data-aos="fade-up">
            <img
                    src={images[currentIndex]}
                    alt="Home"
                    className="img-fluid home-image"
                    style={{ objectFit: 'cover', width: '100%', height: '70vh' }}
                />
                <div
                    className="d-flex flex-column align-items-center justify-content-center text-white"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.4)',
                        padding: '20px',
                    }}
                >
                    <div
                        className="image-inside-content"
                        style={{
                            marginTop: '15%', // Adjust margin for better center positioning
                            width: '100%',
                            maxWidth: '1000px', // Max width to prevent content from being too wide
                            boxSizing: 'border-box',
                            padding: '10px',
                        }}
                    >
                        <h1 className=" home-bg-img-head">Welcome to Redmond Tamil School</h1>
                        <p className="home-bg-img-text">
                            At Redmond Tamil School, we nurture students with Tamil heritage, fostering cultural pride
                            and empowering them with knowledge for a bright future.
                        </p>
                    </div>
                </div>
                <div className="image-navigation-buttons">
                <div className="carousel-control-prev" onClick={prevImage}>
            <span className="carousel-control-prev-icon"></span>
            </div>
            <div className="carousel-control-next" onClick={nextImage}>
            <span className="carousel-control-next-icon"></span>
            </div>

                </div>
            </div>

            <div className="container-fluid tamil-content p-3 text-center text-dark mb-3 fs-4" data-aos="fade-up">
                <p style={{ wordSpacing: '15px' }}>கற்க   கசடறக்   கற்பவை கற்றபின்<br />
                    நிற்க அதற்குத் தக. </p>
            </div>
            <img src={aboutUsBG} alt="" className="about-bg-img" data-aos="fade-up"/>
            <div className="container d-flex flex-column align-items-center justify-content-center text-dark mb-2" data-aos="fade-up">
                <div className="about-content m-5 d-flex flex-column align-items-center justify-content-center text-dark">
                    <h2 style={{ fontWeight: "bolder", marginBottom: '3%' ,marginTop: '-4%'}}>About <span className='web-color'>Us</span></h2>
                    <p>Redmond Tamil School was started in 2009 with the aim of teaching Tamil to children living in Washington State. It is a non-profit organization run by volunteers for the service of Tamil education. It has been continuously promoting Tamil for fifteen years with more than four hundred children and more than two hundred volunteers.
 
 Our children learn not only the language but also the tradition, culture, and history of Tamil art. Various art and literary events such as Pongal, Banana Leaf Festival, Tamil Malai, and Traditional Dress Day are held annually.
  
 The academic year operates under the curriculum of the World Tamil Education Association. Our children learn the basics every week, take exams every month after learning, and enjoy sweets during the exams and pass at the end of the year. They learn and practice many skills such as language, literature, conversation, and essay writing.
  
 Our Redmond Tamil School is a place where children who study classical languages with excellence, good teachers who teach them in a good way, volunteers who work tirelessly to make the school run smoothly, and a principal and administration who lead and guide them, share the pride of bringing sweet Tamil to the younger generation!</p>
                    <Link to="/About-Us" className="web-color mt-4" data-aos="fade-up" onClick={() => window.scrollTo(0, 0)}>Know More</Link>
                    {/* <a href={"/About-Us"} className="web-color mt-4">Know More</a> */}
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails  spanVal={'Latest '} heading={' News '} checkTrue={false}
                        Details={numWithText}
                         />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none ">
                        <ShowImages imagePathLink={EventPage} isTabView={false} />
                    </div>
                </div>
                <div className="row tabView-column-show" data-aos="fade-up">
                    <div className="col-md-6 tabView-colum1 ">
                        <ShowImages imagePathLink={EventPage} />
                    </div>
                    <div className="col-md-6 tabView-colum2 ">
                        <ShowImages imagePathLink={achiveMentImage} isTabView={true} />
                    </div>
                </div>

                <div className="row mb-5 not-show-column-mobile" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} isTabView={true} />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 mt-3">
                        <CardWithContentDetails  heading={'Events'} checkTrue={true}
                        Details={numWithText2}
                         />
                    </div>
                </div>
                <div className="row mb-5 show-change-column-mobile" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Events'} spanVal={'Events'} heading={'dolor sit amet, consectetur'} checkTrue={true}
                        Details={numWithText2}
                         />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} />
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

function CardWithContentDetails({ link, spanVal, heading, checkTrue,Details }) {
    return (
        <>
            <div className={`${checkTrue ? 'left-align' : 'right-alignment'} mb-3`}>
            </div>
            <h2 className={`${checkTrue ? 'left-align' : 'right-alignment'} mb-3 span-val`}>
            <b>
                <Link to={'/Blog'} className="web-color " style={{ textDecoration: 'none' }}
                ><b id="spanVal-colo">{spanVal} <span className='web-color'>{heading}</span></b></Link>
            </b>
            </h2>
            <div className="row">
                {Details.map((item, index) => (
           
                    <CreatenumberWithTexts key={index} date={item.dateValue}
                        head={item.headValue}
                        text={item.contentValue}
                        num={item.numValue} changeSide={checkTrue} />
                        
                ))}
            </div>
        </>
    )
}

function CreatenumberWithTexts({ date, head, text, num, changeSide }) {
    return (
        <>
            {changeSide ? (
                <>
                    <div className="col-sm-2">
                        <p
                            className="num-circle rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '75px',
                                height: '75px',
                                margin: '0',
                                fontSize: '0.9rem'
                            }}
                        >
                           {num.split(' ')[0]}<br></br>
                           {num.split(' ')[1].toUpperCase()}
                        </p>
                    </div>
                    <div className="col-sm-10">
                        <p className="apply-gray">{date}</p>
                        <h5><b>{head}</b></h5>
                        <p className="apply-gray">{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-sm-11 right-alignment">
                        <p className="apply-gray">{date}</p>
                        <h5><b>{head}</b></h5>
                        <p className="apply-gray">{text}</p>
                    </div>
                    <div className="col-sm-1 circle-space">
                        <p
                            className="num-circle  rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '75px',
                                height: '75px',
                                margin: '0',
                                fontSize: '33.9px'
                            }}
                        >
                            {num}
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

function ShowImages({ imagePathLink, isTabView }) {
    return (
        <div className="image-container">
            <img
                src={imagePathLink}
                alt=""
                className={isTabView ? "tab-view-image" : "default-view-image"}
            />
        </div>
    );
}




export default SecondHome;