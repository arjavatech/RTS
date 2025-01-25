import { studentImageAndContent } from "./cardDetails";
import { PhotoGallaryFun } from "./AboutUs.jsx";
import { photoGallary } from "./cardDetails.js";
import { Header } from './HomeHeader.jsx';
import HomeHeader from "./HomeHeader.jsx";
import { FooterSection } from "./App";
import { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function StudentSection() {
     useEffect(() => {
                  AOS.init({
                      duration: 1000, 
                      easing: 'ease-out', 
                      once: false,
                  });
                  window.scrollTo(0, 0);
              }, []);
    return (
        <div id="student-section">
            <HomeHeader />
            <Header headVal={'Student Section'} />
            {/* <h4 className="text-dark text-center mt-3"><b>Student <span className="web-color"> achievements</span></b></h4> */}
            <div className="container student-row mt-5" data-aos="fade-up">
                <div className="row text-dark ">
                    {studentImageAndContent.map((item, index) => (
                        <StudentAchivement key={index} imageVal={item.imagePath} head={item.name} textContent={item.details} isShow={index==6} />
                    ))}
                </div>
            </div>

            <div className="container-fluid portal-section d-flex flex-column align-items-center p-3 mt-5" data-aos="fade-up">
                <PortalSection heading={"Students Portal"} content={
                    "Lorem ipsum dolor sit amet consectetur. Nunc sit rhoncus purus et. Ornare leo vivamus id tempus scelerisque consectetur mauris iaculis quam.Tristique vitae ipsum cras vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam."
                } btnName={"Login"} />
            </div>
            <h2 className="text-center mt-3 text-dark mt-5 mb-3" data-aos="fade-up">
                <b><span className="web-color">Photo</span> Gallary</b>
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="row mb-5">
                    <PhotoGallaryFun pictures={photoGallary} idVal={"photoGalleryCarousel2"} />
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

function StudentAchivement({ imageVal, head, textContent,isShow }) {
    let [showReadLess,setReadLess] =  useState(false);
    let [showReadMore,setReadMore] = useState(isShow);
    function toggleContent(){
        setReadMore(false);
        setReadLess(true);
    }
    function toggleContent2(){
        setReadMore(true);
        setReadLess(false);
    }
    return (
        <>
        {showReadMore ?(
            <div className="text-center">
            <button className="login-style2 fs-6 pt-2 pb-2" onClick={toggleContent}><b>Read More</b></button>
            </div>
        ):(
            <div className="col-sm-6 col-md-4 col-xl-4 d-flex flex-column align-items-center">
            <img src={imageVal} className="student-achive-image" alt="" style={{ width: '350px', height: 'auto' }} />
            <h5 className="mt-3 student-achivement-head"><b>{head}</b></h5>
            <p>{textContent}</p>
        </div>
        )}
        {showReadLess ? (
             <div className="text-center">
                <button className="login-style2 fs-6 pt-2 pb-2" onClick={toggleContent2}><b>Read Less</b></button>
             </div>
        )
         : ''}
        </>
    )
}

export function PortalSection({ heading, content, btnName }) {
    return (
        <>
            <h3 className="text-white mt-2 mb-3" data-aos="fade-up"><b>{heading}</b></h3>
            <div className="container text-white" data-aos="fade-up">
                <p className="text-center fs-6">{content}</p>
                <div className="text-center">
                    <button className="login-style fs-6 pt-2 pb-2"><a href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta" className="link-sty" target="blank"><b>{btnName}</b></a></button>
                </div>
            </div>
        </>
    );
}

export default StudentSection;