import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from "./HomeHeader";
import { BlogCard } from './Blog';
import Logo from "./assets/logo.png";
import { FooterSection } from "./App";
import {firstContentCard} from './blogContents.jsx';
import {secondContentCard} from './blogContents.jsx';
import HomeHeader from "./HomeHeader";

function ReadMorePage() {
    const location = useLocation();
    const cardData = location.state?.cardData; // Data from the clicked card
    const title = location.state?.title; // Title of the clicked card

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: false,
        });
    }, []);

    return (
        <div data-aos="fade-up">
            <HomeHeader />
            <Header headVal={'Blog & Events'} />
            {cardData ? (
                <div className="custom-container fs-3">
                    <div className="row mt-5">
                        {/* Main content area */}
                        <div className="col-xl-8 col-md-12 col-sm-12">
                            {/* <h3><b>{title}</b></h3> */}
                           
                            {cardData.map((item, index) => (
                                <ContentAllDetails
                                    key={index}
                                    head={item.heading}
                                    date={item.date}
                                    authorName={item.authorName}
                                    content={item.content}
                                />
                            ))}
                        </div>

                        {/* Sidebar or additional content */}
                        <div className="col-xl-4 d-xl-block mb-3">
                            <div className="blog-container">
                                <div className="blog-card1 mt-3">
                                    {/* Render Pongal Celebration card if the title is "Pongal Celebration – A Vibrant Cultural Festivity" */}
                                    {title === "Pongal Celebration – A Vibrant Cultural Festivity" && (
                                        <BlogCard
                                        gradimg={Logo}
                                        blogimgid={"grad-img1"}
                                        h1cont={"Tamil Talent Extravaganza"}
                                        h1id={"grad1-cont1"}
                                        graddate={"18.01.2025"}
                                        dateid={"graddate1"}
                                        maincont={"A Celebration of Creativity, Language, and Culture We are excited to announce the Tamil Talent Extravaganza, a series of competitions designed to nurture and celebrate the artistic and intellectual abilities of our students across all grades."}
                                        excescont={"This includes earning the required number of credits."}
                                        maincontid={"main-cont-id"}
                                        btnid={"readmore-grad"}
                                        readContentFullDetails={secondContentCard} // Content for Tamil Talent Extravaganza card
                                    />
                                    )}

                                    {/* Render Tamil Talent Extravaganza card if the title is "Tamil Talent Extravaganza" */}
                                    {title === "Tamil Talent Extravaganza" && (
                                        <BlogCard
                                        gradimg={Logo}
                                        blogimgid={"x"}
                                        h1cont={"Pongal Celebration – A Vibrant Cultural Festivity"}
                                        h1id={"grad1-cont1"}
                                        graddate={"14.01.2025"}
                                        dateid={"graddate1"}
                                        maincont={"Redmond Tamil School proudly hosts its annual Pongal Celebration, a joyous event that unites the community in honoring Tamil heritage."}
                                        excescont={"This includes earning the required number of credits."}
                                        maincontid={"main-cont-id"}
                                        btnid={"readmore-grad"}
                                        readContentFullDetails={firstContentCard} // Content for Pongal Celebration card
                                    />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No data available</p>
            )}
            <FooterSection />
        </div>
    );
}

function ContentAllDetails({ head, authorName, content,date }) {
    return (
        <>
            <h3><b>{head}</b></h3>
            <p className="fs-5 text-muted mb-0">{date}</p>
            <p className="fs-5 text-muted">{authorName}</p>
            <div className="text-center">
                <img src={Logo} alt="" width={500} className="read-more-image" />
            </div>
            <div className="text-justify preStyle" dangerouslySetInnerHTML={{ __html: content }} >
                {/* {content} */}
            </div>
     </>
  );
}
export default ReadMorePage;