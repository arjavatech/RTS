import 'bootstrap/dist/css/bootstrap.min.css';

export default function EventCard({ eventImg }) {
    return (
        <div className="container my-4 about-us">
            <div className="row">
                <div className="col-4 text-center">
                    <img src={eventImg} alt="Event" className="img-fluid" id="eventimg" />
                </div>
                <div className="col-8 ">
                    <p id='time'><span id="date">21st DEC 2024</span> 1-2hr</p>
                    <p id='address'>KINGS,LIVERPOOL UK</p>
                    <h2 id='meeting'>Parent-Teacher Meeting</h2>
                    <p id='meetingContent'>An oppurtunity for parents and teachers to discuss students progress,strengths,
                        and areas for<br/> <span id='meetingContent-2'>improvement.join us to stay involvedin your child's acsdemic journey.</span></p>
                </div>


            </div>
        </div>
    );
}
