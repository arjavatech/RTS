export default function HomeFooter({ instagram, facebook }) {
    return (
        <div className="about-us">
            <div className="container-fluid my-4 footer-container">
                <div className="row justify-content-center ">
                    <div className="col-12">
                        <img src={facebook} alt="facebook" id="facebook-icon" />
                        <img src={instagram} alt="instagram" id="instagram-icon" />

                        <h3 id="footer-msg">Stay updated with latest news and events.sign up now!</h3>
                        <input type="text" id="email" className="email-box" placeholder="email address"></input>
                        <button id="subscribe-btn">Subscribe</button>
                        <p id="footer-add">Bellevue,WA 98005 ,USA<br/>
                            info@RedmondTamilSchool.edu</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}