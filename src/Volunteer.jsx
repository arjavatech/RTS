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
                <p className='text-center'>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in quam non vitae. Amet habitant pretium nascetur nunc pretium. Tincidunt et nec quis amet et id volutpat. Sed vestibulum non risus nulla.
                    Risus sit senectus a velit. Vestibulum evismod eget vestibulum eget elementum duis nibh odio quisque. Cras faucibus viverra aenean commodo egestas posuere tincidunt tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
                    Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
                <div className='text-center mb-5'>
                    <a href="" className="link-sty"><button className="login-style2 fs-6 pt-2 pb-2 mb-2 mt-4"><b>Join Us</b></button></a>
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