import { Header } from './HomeHeader.jsx';
import { AdmissionColImages } from './AboutUs.jsx';
import { admissionImagesWithDetails } from "./cardDetails.js";
import { CommunicationProtocols } from './ParentsSection.jsx';
import { commuincationProtocalsValues } from "./cardDetails.js";
import { FooterSection } from "./App";
import HomeHeader from './HomeHeader.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Volunteer() {
     useEffect(() => {
                  AOS.init({
                      duration: 1000, 
                      easing: 'ease-out', 
                      once: false,
                  });
                  window.scrollTo(0, 0);
              }, []);
    return (
        <div className='about-us'>
        <HomeHeader/>
            <Header headVal={'Volunteer'} />
            <div className="container text-dark" data-aos="fade-up">
                <h2 className='text-center mt-5 mb-4'><b>Volunteering <span className='web-color'> opportunities</span></b></h2>
                <p className='text-center'>
               
                Redmond Tamil School, a 501(c)(3) nonprofit organization, offers a wide range of volunteer opportunities for individuals passionate about promoting Tamil language, culture, and community engagement. Volunteers can contribute in numerous ways, including teaching Tamil language, assisting teachers in classrooms, organizing cultural events, managing logistics, overseeing safety patrols, supporting library operations. These roles provide a chance to give back to the community, connect with Tamil heritage, and support the education of younger generations. Volunteering at Redmond Tamil School is not only a rewarding experience but also an excellent way to build leadership skills, foster teamwork, and create lasting relationships within the Tamil community. Additionally, eligible volunteers may be recognized with Presidential Volunteer Awards (https://presidentialserviceawards.gov) for their dedication and hours of service, honoring their commitment to making a positive impact. Whether you have a few hours to spare or are looking for a long-term commitment, there are opportunities to suit every interest and schedule.
                </p><div className='text-center mb-5'>
                        <a href="https:/docs.google.com/forms/d/e/1FAIpQLSeLZW7QamfLOGHSTnLlF4LSgdB5Z9zPW4g0dsvit88ipx5q3Q/viewform" 
                        target="_blank" rel="noopener noreferrer" className="link-sty">       
                        <button className="login-style2 fs-6 pt-2 pb-2 mb-2 mt-4"><b>Join Us</b></button></a>
                    </div>
                {/* ADMINISTRATION TEAM  */}
                {/* <div className="text-center mt-5 mb-3">
                    <h2><b>Volunteer <span className='web-color'> Teams</span></b></h2>
                </div>
                <div className="row">
                    {admissionImagesWithDetails.map((item, index) => (
                        <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
                    ))}
                </div> */}
            </div>
            <div className="container-fluid mt-5" data-aos="fade-up">
                <h3 className='text-center text-dark mb-5'><b>Administrative<span className='web-color'> Contact</span></b></h3>
                <div className="row mb-5">
                    {commuincationProtocalsValues.map((item, index) => (
                        <CommunicationProtocols key={index} emailId={item.emailValue} nameValue={item.nameValue} />
                    ))}
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Volunteer;