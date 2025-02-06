import React from "react";
 // Update with your actual image path
 // Import custom CSS for styling
 import { Link } from "react-router-dom";
import aboutUsBG from './assets/about us bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutUs = () => {
     useEffect(() => {
                AOS.init({
                    duration: 1000, 
                    easing: 'ease-out', 
                    once: false,
                });
                window.scrollTo(0, 0);
            }, []);
  return (
    <section className="position-relative text-center py-5 container" data-aos="fade-up">
      {/* Background Image */}
      <img
        src={aboutUsBG}
        alt="Background"
        className="position-absolute  start-50 translate-middle opacity-1.25"
        style={{ top: "53%",
                
         }}
      />

      {/* Title */}
      <h2 className="fw-bold position-relative mb-4">
        About <span className="text-danger">Us</span>
      </h2>

      {/* Description */}
      <p className=" position-relative text-align-justify text-justify mt-2">
      Redmond Tamil School was started in 2009 with the aim of teaching Tamil to children living in Washington State. It is a non-profit organization run by volunteers for the service of Tamil education. It has been continuously promoting Tamil for fifteen years with more than four hundred children and more than two hundred volunteers.
                        Our children learn not only the language but also the tradition, culture, and history of Tamil art. Various art and literary events such as Pongal, Banana Leaf Festival, Tamil Malai, and Traditional Dress Day are held annually.
                        The academic year operates under the curriculum of the World Tamil Education Association. Our children learn the basics every week, take exams every month after learning, and enjoy sweets during the exams and pass at the end of the year. They learn and practice many skills such as language, literature, conversation, and essay writing.
                        Our Redmond Tamil School is a place where children who study classical languages with excellence, good teachers who teach them in a good way, volunteers who work tirelessly to make the school run smoothly, and a principal and administration who lead and guide them, share the pride of bringing sweet Tamil to the younger generation!</p>
                   

      {/* "Know More" Button */}
      <Link to="/About-Us" className="web-color mt-3" onClick={() => window.scrollTo(0, 0)}>Know More</Link>
    </section>
  );
};

export default AboutUs;
