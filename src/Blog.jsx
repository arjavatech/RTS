// import bg2 from "./assets/heading bg.png";
// import BlogCard from "./BlogCard";

import React, { useState } from 'react';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";
import BlogContents from './blogContents.jsx'
import Logo from "./assets/logo.png"; 
import ReadMorePage from './ReadMorePage.jsx';
import {firstContentCard} from './blogContents.jsx';
import {secondContentCard} from './blogContents.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Blog() {

    useEffect(() => {
              AOS.init({
                  duration: 1000, 
                  easing: 'ease-out', 
                  once: false,
              });
          }, []);
    
    const [showContent, setShowContent] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);


    const handleClick = () => {
        setShowContent(true);
    };

    const handleClick2 = () => {
        setShowContent2(true);
    };

    const handleClick3 = () => {
        setShowContent2(false);
    };

    const handleClick4 = () => {
        setShowContent(false);
    };

    return (
        <div data-aos="fade-up">
            <HomeHeader />
            <Header headVal={'Blog & Events'} />
            <div className="container blog-container mt-4 text-dark fs-3">
                <h2 className='text-center m-4'><b>School <span className='web-color'>News</span></b></h2>
                <div className="row g-3">
                    <h2 className='no-content'>No content to display</h2>
                   
                </div>
            </div>


           
            <div className="container blog-container mt-4 text-dark mb-5 fs-3">
                <h2 className='text-center mb-5'><b>Event <span className='web-color'>Updates</span></b></h2>

                <div className="row g-3">
                    <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"Tamil Talent Extravaganza"} h1id={"grad1-cont1"}
                                    graddate={"18.01.2025"} dateid={"graddate1"}
                                    maincont={"A Celebration of Creativity, Language, and Culture We are excited to announce the Tamil Talent Extravaganza, a series of competitions designed to nurture and celebrate the artistic and intellectual abilities of our students across all grades. "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} 
                                    readContentFullDetails={secondContentCard}
                                    />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"Pongal Celebration – A Vibrant Cultural Festivity"}
                                h1id={"grad1-cont1"}
                                graddate={"14.01.2025"}
                                dateid={"graddate1"}
                                maincont={"Redmond Tamil School proudly hosts its annual Pongal Celebration, a joyous event that unites the community in honoring Tamil heritage. "}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                                readContentFullDetails = {firstContentCard}
                            />
                        </div>
                    </div>

                   
                </div>
            </div>
            <FooterSection />

        </div>
    )
}


export function BlogCard({ gradimg, blogimgid, h1cont, h1id, graddate, maincont, dateid, maincontid, btnid, excescont, readContentFullDetails, title }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleContent = () => {
        navigate("/Read-more", { 
            state: { 
                cardData: readContentFullDetails,  // Detailed content to show
                title: h1cont  // Title of the clicked card (heading)
            }
        });
    };
    

    return (
        <div className="card blog-card-style">
            <img src={gradimg} alt="grad-img" className="card-img-top img-fluid" style={{width: '90%', height: '60%'}} />
            <div className="card-body">
                <h4 id="grad1-cont1" className="blog-card-header text-center"><b>{h1cont}</b></h4>
                <p className="text-muted text-center">{graddate}</p>
                <p id="main-cont-id">
                    {isExpanded ? `${maincont} ${excescont}` : maincont}
                </p>
                <div className="text-center m-3">
                    <button 
                        className="login-style2 fs-6 pt-2 pb-2"
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title={readContentFullDetails === undefined ? "No datas available" : ""}
                        style={readContentFullDetails === undefined ? {backgroundColor : 'gray'} : {}}
                        onClick={() => {
                            toggleContent(); // Navigate to the desired page
                            setTimeout(() => {
                                window.scrollTo(0, 0); 
                            }, 0); // Small delay to ensure navigation is complete
                        }} 
                        disabled={readContentFullDetails === undefined}>
                        <b>Read More</b>
                    </button>
                </div>
            </div>
        </div>
    );
}