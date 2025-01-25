import HomeFirstImg from "./assets/HomeFirstImg.jpg";
import ReopenCard from "./ReopenCard";
import homeImgSecond from "./assets/homeImgSecond.jpg";
import homeImgThree from "./assets/homeImgThree.jpg";
import EventCard from "./EventCard";
import AcheivementCard from "./AcheivementCard";
import homeImgFour from "./assets/homeImgFour.jpg";
import GraduationCard from "./GraduationCard";

export default function HomeBody() {
    return (
        <div className="about-us">
            {/* <div className="container-fluid">
                <div id="homeContainer" className="text-center">
                    <img src={HomeFirstImg} id="HomeFirstImg" alt="Home" className="img-fluid" />
                    <h1 id="homeWelcome">Welcome to Redmond Tamil School</h1>
                    <h4 id="HomeWelcomeImgH4">
                        At Redmond Tamil School, we nurture students with Tamil heritage, fostering cultural pride
                    </h4>
                    <h4 id="HomeWelcomeImgH4-2">
                        and empowering them with knowledge for a bright future.
                    </h4>
                    <button className="registerBtn  mt-3">Register</button>
                </div>
            </div> */}

        <div className="container-fluid">
        <img src={HomeFirstImg} id="HomeFirstImg" alt="Home" className="img-fluid" />
        </div>

            {/* Quote Section */}
            <div className="quoteContainer text-center mb-5">
                <h2 id="quoteFirstLine">
                    "The more that you read, the more things you will know, the more that
                </h2>
                <h2 id="quoteSecondLine">
                    you learn, the more places you'll go." <span id="author">- Dr. Seuss</span>
                </h2>
            </div>

            {/* Latest News Section */}
            <div className="latestNews text-center">
                <h1>
                    Latest <span id="news">News</span>
                </h1>
            </div>

            {/* Cards for Latest News */}
            <div className="row justify-content-center my-4" id="reopencard-container">
                <ReopenCard
                    className="col-md-4"
                    img1={homeImgSecond}
                    cardTitle={"School Reopening"}
                    cardContent={
                        "We are excited to welcome our students back! The school reopens on November 25th for the new term. Make sure to check your class schedules and prepare for an enriching academic journey."
                    }
                    classname={"reopenCard"}
                    titleId={"schoolReopen"}
                    contentId={"contentReopen"}
                    imgId={"cardImg"}
                />

                <ReopenCard
                    className="col-md-4"
                    img1={homeImgSecond}
                    cardTitle={"School Reopening"}
                    cardContent={
                        "We are excited to welcome our students back! The school reopens on November 25th for the new term. Make sure to check your class schedules and prepare for an enriching academic journey."
                    }
                    classname={"reopenCard"}
                    titleId={"schoolReopen"}
                    contentId={"contentReopen"}
                    imgId={"cardImg"}
                />

                <ReopenCard
                    className="col-md-4"
                    img1={homeImgSecond}
                    cardTitle={"School Reopening"}
                    cardContent={
                        "We are excited to welcome our students back! The school reopens on November 25th for the new term. Make sure to check your class schedules and prepare for an enriching academic journey."
                    }
                    classname={"reopenCard"}
                    titleId={"schoolReopen"}
                    contentId={"contentReopen"}
                    imgId={"cardImg"}
                />
            </div>

            {/* Events Section */}
            <div className="eventCard text-center">
                <h1>
                    Upcoming <span id="news">Events</span>
                </h1>
                <EventCard eventImg={homeImgThree} />
                <EventCard eventImg={homeImgThree} />
                <EventCard eventImg={homeImgThree} />
                <button id="seeMore">see more</button>
            </div>

            {/* Acheivement card */}

            <div className="container my-4">
                <div className="row justify-content-center">
                    <h1 id="student"> Student <span id="acheivement">Acheivements</span></h1>
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                </div>
            </div>

            {/* Second Achievements Row */}
            <div className="container my-2 second-achievement-container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <AcheivementCard medal={homeImgSecond} acheiveId={"medalImg"} />
                    </div>
                </div>
            </div>


            <div className="text-center">
                <h1>Our  <span id="news">Blog</span></h1>
            </div>
            <div className="container fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img src={homeImgFour} alt="homeImgFour" id="homeImgFour" />
                    </div>
                    <div className="col-md-9 graduation-content">
                        <h3 id="grad-head">What is Grauvation? Unveilling the blend of design and functionality</h3>
                        <p id="grad-date">26th December 2024 </p>
                        <p id="grad-cont">Graduation is the process of completing the requirements to earn a
                            degree or diploma from a school, college, or university. This includes
                            earning the required number of credits, taking all necessary courses,
                            and completing any other requirements</p>
                        <button id="readmore-btn">Read more</button>
                    </div>
                </div>
            </div>


            {/* garduation card*/}
            <div className="container fluid ">
                <div className="row">
                    <div className="col-md-3 ">
                        <GraduationCard gradContainer={"grad-container"} graduationImg={homeImgFour} gradImgClass={"grad-class"} />
                    </div>
                    <div className="col-md-3 ">
                        <GraduationCard gradContainer={"grad-container"} graduationImg={homeImgFour} gradImgClass={"grad-class"} />
                    </div>
                    <div className="col-md-3 ">
                        <GraduationCard gradContainer={"grad-container"} graduationImg={homeImgFour} gradImgClass={"grad-class"} />
                    </div>
                    <div className="col-md-3 ">
                        <GraduationCard gradContainer={"grad-container"} graduationImg={homeImgFour} gradImgClass={"grad-class"} />
                    </div>
                </div>
            </div>

        </div>
    );
}
