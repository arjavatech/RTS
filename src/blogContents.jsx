
import ReactDOMServer from 'react-dom/server';
import img from "./assets/logo.png";

export let firstContentCard = [
    {
        heading: "Pongal Celebration – A Vibrant Cultural Festivity",
        authorName: "Ram Valliyappan",
        date: "14.01.2025",
        img:img,
        content: ReactDOMServer.renderToStaticMarkup(
          <div>
            <h3>Pongal Celebration – A Vibrant Cultural Festivity</h3>
            <p>Redmond Tamil School proudly hosts its annual Pongal Celebration, a joyous event that unites the community in honoring Tamil heritage. This cherished festival is an opportunity to celebrate the spirit of Pongal—a time of gratitude, prosperity, and cultural unity.</p>
    
            <h6><strong>About Pongal</strong></h6>
            <p>Pongal, one of Tamil culture’s most beloved festivals, symbolizes the harvest season and the spirit of abundance...</p>
    
            <h6><strong>What to Expect</strong></h6>
            <ul>
              <li><strong>Cultural Performances:</strong> Be captivated by traditional dances...</li>
              <li><strong>Community Bonding:</strong> A heartwarming gathering...</li>
              <li><strong>Festive Atmosphere:</strong> A vibrant and family-friendly setting...</li>
            </ul>
    
            <h6><strong>Join Us for a Memorable Celebration</strong></h6>
            <p>Our Pongal Celebration is more than an event—it’s a tribute to our cultural roots, a celebration of creativity, and a reminder of the values that connect us</p>
            <p>We look forward to celebrating this joyous festival with you every year!</p>
          </div>
        )
    }
];
export let thirdContentCard = [
  {
      heading: "New Youth Internship Program Launching at RTS!",
      authorName: "Ram Valliyappan",
      date: "9/5/2024",
      img:img,
      content: ReactDOMServer.renderToStaticMarkup(
        <div >
    
    
   
    
    
    <h3> What Is the Youth Internship Program?</h3>
      <p>
        This initiative is designed to engage high school and college students, empowering them to make a meaningful impact on RTS through technology.
        Students will have the opportunity to contribute to our website, app, and other innovative projects, driving real change within RTS.
      </p>
  
    
    <section className="mb-4">
      <h2 className="h4 ">Program Details</h2>
      <ul>
        <li><strong>Year-Round Commitment</strong>: The program will run year-round, requiring clear dedication from participants.</li>
        <li><strong>Paid Internships</strong>: In recognition of their time and efforts, we are pleased to offer paid internships.</li>
        <li><strong>Timeline</strong>: We are in the final stages of planning and will share further details in the next 2-3 weeks.</li>
      </ul>
    </section>
    
    <section>
      <h2 className="h4 ">Get Involved</h2>
      <p>
        Parents or students interested in joining are encouraged to:
      </p>
      <ol>
        <li>Join the <strong>RTS Youth Internship WA Group</strong>.</li>
        <li>
          Complete the form as soon as possible:
          <a href="https://forms.gle/2TzQEJSK41cQfaER9" className="text-decoration-none" target="_blank">https://forms.gle/2TzQEJSK41cQfaER9</a>.
        </li>
      </ol>
      
    </section>
  </div>
      )
  }
];

export let secondContentCard = [{
    heading: "Tamil Talent Extravaganza",
    authorName: "Ram Valliyappan",
    date: "18.01.2025",
    img:img,
   content: ReactDOMServer.renderToStaticMarkup(
    <div>
      <h3>A Celebration of Creativity, Language, and Culture</h3>
      <p>We are excited to announce the Tamil Talent Extravaganza, a series of competitions designed to nurture and celebrate the artistic and intellectual abilities of our students across all grades. These competitions offer a platform to showcase talents, foster creativity, enhance language skills, and instill cultural pride.</p>

      <h4><strong>Competition Categories:</strong></h4>
      <ul>
        <li><strong>Essay Writing / Letter Writing:</strong>
          <ul>
            <li><strong>Description:</strong> Students will demonstrate their writing skills in essay and letter formats.</li>
            <li><strong>Structure:</strong> Preliminary, Intermediate, and Final Rounds.</li>
            <li><strong>Details:</strong> Specific topics and level details will be shared soon.</li>
          </ul>
        </li>
        <li><strong>Thirukkural Recital:</strong>
          <ul>
            <li><strong>Description:</strong> Participants will recite verses from the Thirukkural, highlighting its literary and moral significance.</li>
            <li><strong>Structure:</strong> Preliminary, Intermediate, and Final Rounds.</li>
            <li><strong>Details:</strong> Specific verses and guidelines will be provided soon.</li>
          </ul>
        </li>
        <li><strong>Tamil Wordcraft Challenge:</strong>
          <ul>
            <li><strong>Description:</strong> A creative competition enhancing Tamil writing skills through structured tasks and imaginative wordplay.</li>
            <li><strong>How it Works:</strong> A grade-level specific word list will be provided in advance. Students will write them accurately based on pronunciation.</li>
            <li><strong>Structure:</strong> Preliminary and Final Rounds.</li>
          </ul>
        </li>
        <li><strong>Tamil Vocabulary Challenge:</strong>
          <ul>
            <li><strong>Description:</strong> This challenge tests students’ knowledge of Tamil words by requiring them to translate English words into Tamil.</li>
            <li><strong>Structure:</strong> Preliminary and Final Rounds.</li>
            <li><strong>Details:</strong> Word lists and guidelines will be released soon.</li>
          </ul>
        </li>
        <li><strong>Tamil Art:</strong>
          <ul>
            <li><strong>Description:</strong> A platform for students to express their artistic talents through various forms of visual art.</li>
            <li><strong>Structure:</strong> Final Round Only.</li>
          </ul>
        </li>
        <li><strong>RTS School Logo Design Challenge:</strong>
          <ul>
            <li><strong>Description:</strong> Students will design creative logos reflecting their school spirit.</li>
            <li><strong>Structure:</strong> Final Round Only.</li>
          </ul>
        </li>
        <li><strong>Tamil Debate:</strong>
          <ul>
            <li><strong>Description:</strong> Students will engage in debates, enhancing their critical thinking and public speaking skills in Tamil.</li>
            <li><strong>Structure:</strong> Preliminary and Final Rounds.</li>
          </ul>
        </li>
        <li><strong>Tamil Elocution:</strong>
          <ul>
            <li><strong>Description:</strong> Students will express their thoughts on various topics, enhancing their public speaking and communication skills in Tamil.</li>
            <li><strong>Structure:</strong> Preliminary, Intermediate, and Final Rounds.</li>
          </ul>
        </li>
      </ul>

      <h6><strong>General Competition Information:</strong></h6>
      <ul>
        <li><strong>Class Level Competitions:</strong> Initial rounds within each class will identify winners for subsequent rounds.</li>
        <li><strong>Participation Certificates:</strong> All participants will receive certificates.</li>
        <li><strong>Awards Ceremony:</strong> Winners will be honored during the Annual Day event.</li>
      </ul>
    </div>
  )

}];

export let fourthContentCard = [{
  heading: "High School Credit Program (HSCP) 2024-25 - UPDATES",
  authorName: "Arasu Elangovan",
  date: "10.2.2024",
  img:img,
 content: ReactDOMServer.renderToStaticMarkup(
  <div class="container py-5">
       
        
            <h3>High School Credit Program (HSCP) 2024-25 - UPDATES</h3>
            <p class="lead">We are proud to offer this program free of charge to current RTS students and alumni, ensuring that our students can benefit from this comprehensive learning opportunity at no additional cost.</p>
        

      
        <section class="mb-5">
        <h4><strong>Eligibility Criteria:</strong></h4>
        <ul>
                <li>
                    <strong>All Current RTS Grade 7 and 8 Students:</strong>
                    <p>Participation is automatic, and no additional registration is required. Students may opt-out if they wish, and no additional fees or administrative processes are involved.</p>
                </li>
                <li>
                    <strong>Current RTS Students in Grades 6 or Lower AND Who Are in Grades 9-12 at Their Regular Schools:</strong>
                    <p>These students are also eligible to participate. You'll need to register, but no additional fees apply.</p>
                </li>
                <li>
                    <strong>RTS Graduates/Alumni (with at Least 5 Years at RTS) in Grades 9-12 at Their Regular Schools:</strong>
                    <p>Alumni who have spent at least five years at RTS are welcome to join. You'll need to register, but no additional fees apply.</p>
                </li>
                <li>
                    <strong>Other RTS and Non-RTS Students in Grades 9-12 at Their Regular Schools:</strong>
                    <p>Non-RTS students or RTS students who do not fall under the above categories are eligible to participate with required registration and a fee of $150.</p>
                </li>
            </ul>
        </section>

       
        <section class="mb-5">
            <h4 class=" mb-3"><strong>Proposed Schedule and Logistics:</strong></h4>
            <p>The HSCP will operate throughout the academic year, with breaks aligned to testing days. Below is the schedule:</p>
            <ul class="fs-5">
                <li><strong>Program Duration:</strong> The HSCP will run for the entire academic year, with breaks on test days to accommodate student workloads.</li>
                <li><strong>Schedule for 7th and 8th Graders:</strong>
                    <ul>
                        <li>Start: 9:30 a.m.</li>
                        <li>End: 12:00 p.m. (With 15 minutes of additional buffer)</li>
                        <li>All 7th and 8th graders will attend regular classrooms at 9:30 a.m. They will participate in HSCP activities during the first part of the day before continuing with their regular curriculum.</li>
                    </ul>
                </li>
                <li><strong>Schedule for Non-7th and 8th Graders:</strong>
                    <ul>
                        <li>Students in grades six or lower at RTS and 9-12 at their regular schools will be assigned a separate classroom for HSCP instruction from 9:30 to 10:00 a.m. They will be dismissed at 10:00 a.m., and no tardy will be recorded for leaving early.</li>
                        <li>Non-RTS students participating in HSCP will be assigned classrooms and leave campus at 10:10 a.m. after their session.</li>
                    </ul>
                </li>
                <li><strong>HSCP Instructional Block:</strong> From 9:30 a.m. to 10:00 a.m., regular RTS teachers, with the support of the HSCP team, will handle the HSCP portion of the instruction for all participating students.</li>
            </ul>
        </section>

       
        <section class="mb-5">
            <h4 class=" mb-3">Teaching and Staffing:</h4>
            <ul class="fs-5">
                <li><strong>HSCP Instructional Team:</strong> All 7th and 8th-grade teachers at RTS will eventually serve as HSCP instructors. Specialized backup HSCP instructors will step in if any regular teacher is unavailable.</li>
                <li><strong>HSCP Specialized Backup Team:</strong> Bala, Arasu Narayan, and Saravanan Srithar will serve as specialized HSCP instructors, ensuring that instructional gaps are effectively covered.</li>
            </ul>
        </section>

       
        <section class="mb-5">
            <h4 class="mb-3">Conclusion and Next Steps:</h4>
            <p>We are eager to implement the HSCP for the upcoming academic year and are confident in its value to students. This program strengthens academic foundations and gives students a head start on earning high school credit, all within the supportive environment of RTS.</p>
            <p>We'd like to hear your feedback and look forward to working together to ensure this program's successful rollout and continuous improvement.</p>
        </section>
    </div>
)

}];
export let sixthContentCard = [{
  heading: "Emcee Auditions Invitation",
  authorName: "Arasu Elangovan",
  date: "19 December 2024",
  img:img,
 content: ReactDOMServer.renderToStaticMarkup(
 <div>
     <div>
        <h3>Emcee Auditions Invitation</h3>
        <p><strong>Dear Students, Teaching Assistants, and HSCP Participants,</strong></p>
        
        <p>The Pongal Organizing Committee is excited to invite you all to participate in the upcoming Emcee Auditions!</p>
        
        <p><strong>Audition Focus</strong></p>
        <p>The primary focus of the audition is to assess your ability to communicate effectively in Tamil. We will evaluate how well you can engage and connect with an audience through your speech.</p>
        <p><strong>Audition Content</strong></p>
        
        <p>You will find attached a sample of the audition content in formal Tamil. However, participants are welcome to use colloquial Tamil or present a modified version of the content for approximately 1-2 minutes during their audition.</p>
        
        <h2>Show Your Energy!</h2>
        <p>We look forward to your energy, creativity, and connection with the audience!</p>
        
        <h6> <strong>Signup</strong></h6>
        <p><a href="https://forms.gle/DpeMhuskfu6sWBLTA" target="_blank">Click here to sign up</a></p>
        <h2>Audition Dates</h2>
        <p><strong>Dates:</strong> January 6, 2025 & January 13, 2025</p>

    </div>
 </div>
)

}];
export let fifthContentCard = [{
  heading: "RTS Tech Internship Update - From the Tech Team",
  authorName: "Arasu Elangovan",
  date: "11.1.2024",
  img:img,
 content: ReactDOMServer.renderToStaticMarkup(
  <div class="container py-5">
       
        
            <h3>RTS Tech Internship Update - From the Tech Team</h3>
            <p class="lead">Welcome to the RTS Tech Intern Initiative! We are excited to inform you about your registration for the Tech Interns program. Your keen interest in technology and active participation set the stage for an exhilarating journey ahead.</p>
       

       
        <section >
            <h4 class=" mb-3"><strong>Upcoming Meeting Invitation:</strong></h4>
            <p class="fs-5">To kickstart this initiative, we invite you to a meet-and-greet session scheduled for this Sunday, 11/3/2024 at 11:30 AM, to be held at Bellevue College, Room 106 C. This gathering is an opportunity to familiarize yourselves with the program, meet fellow participants, and understand the exciting challenges ahead.</p>
        </section>

       
        <section class="mb-5">
            <h4 class=" mb-3"><strong>Evaluation Challenge: Volunteer Management Tool</strong></h4>
            <p class="fs-5">As part of our selection process, we are introducing a challenge to assess your skills. This involves creating a Volunteer Management Tool to capture volunteer details, manage team allocations, and track hours and attendance. You're free to utilize any modern tech stack.</p>

          
            <h4 class="mb-3"><strong>Challenge Outline:</strong></h4>
            <ul class="fs-5">
                <li><strong>Introduction:</strong> The Tool is designed to streamline volunteer management with scalability for future needs. It's essential to employ open-source technologies to minimize costs.</li>
                <li><strong>Objectives:</strong>
                    <ul>
                        <li>Capture and store volunteer details</li>
                        <li>Assign volunteers to appropriate teams</li>
                        <li>Record hours each volunteer spends in their role</li>
                        <li>Track volunteer attendance</li>
                        <li>Allow for future expansions, including additional teams</li>
                    </ul>
                </li>
                <li><strong>Functional Requirements:</strong>
                    <ul>
                        <li><strong>Volunteer Registration:</strong> Develop a form to capture Full Name, Contact Info, Address, Emergency Contacts, Date of Birth, Preferred Teams, Availability, Skills, and Additional Comments.</li>
                        <li><strong>Team Assignments:</strong> Capability to assign volunteers to initial teams like Attendance, Teachers, and more, with options for new team additions.</li>
                        <li><strong>Hours Tracking:</strong> Feature to log hours by date, with notes or comments.</li>
                        <li><strong>Attendance Tracking:</strong> Functionality to record attendance by team or individually, across multiple sessions.</li>
                        <li><strong>Reporting:</strong> Generate and export reports on hours, attendance, and team contributions in formats like CSV or PDF.</li>
                    </ul>
                </li>
            </ul>

            <p class="fs-5">This challenge serves as a home assignment over the next two weeks. It is designed not only to test your technical prowess but also to stimulate innovative thinking and practical application. During the upcoming meeting, we will discuss the challenge in further detail and address any questions you might have.</p>
            <p class="fs-5">We are eager to see your creativity and problem-solving skills at work. Good luck, and we look forward to your impressive submissions!</p>
        </section>

    </div>

)

}];



