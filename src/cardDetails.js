
import mission from './assets/mission.jpg';
import vision from './assets/vision.jpg';
import photo from './assets/photo.jpg';
import values from './assets/values.jpg';
import tamilAcedmyImage from './assets/tamilAcedemyImage.png'
import imageGal1 from "./assets/imageGal1.jpeg";
import imageGal2 from "./assets/imageGal2.jpeg";
import imageGal3 from "./assets/imageGal3.jpeg";
import imageGal4 from "./assets/imageGal4.jpeg";
import imageGal5 from "./assets/imageGal5.jpeg";
import imageGal6 from "./assets/imageGal6.jpeg";
import imageGal7 from "./assets/imageGal7.jpeg";
import imageGal8 from "./assets/imageGal8.jpeg";
import imageGal9 from "./assets/imageGal9.jpeg";
import imageGal10 from "./assets/imageGal10.jpeg";
import imageGal11 from "./assets/imageGal11.jpeg";
import imageGal12 from "./assets/imageGal12.jpeg";
import imageGal13 from "./assets/imageGal13.jpeg";
import imageGal14 from "./assets/imageGal14.jpeg";
import HomeFirstImg from "./assets/homeFirstImg.jpg";

// Importing images for each person
import BhagyaImage from './TeacherVolunteer/Bhagya.jpeg';
import KannanImage from './TeacherVolunteer/Kannan.png';
import UdhayaImage from './TeacherVolunteer/Udhaya.jpeg';
import AmrithaImage from './TeacherVolunteer/Amritha.jpeg';
import AbiramiImage from './TeacherVolunteer/Abirami.png';
import PadmaImage from './TeacherVolunteer/Padma.jpeg';
import PriyaImage from './TeacherVolunteer/Priya-Nallusamy.png';
import SudhaImage from './TeacherVolunteer/Sudha-Vaithiyanathan.jpeg';
import VaishnaviImage from './TeacherVolunteer/Vaishnavi.jpeg';
import MaheswariImage from './TeacherVolunteer/Maheswari.jpeg';
import PriyadharshiniImage from './TeacherVolunteer/Priyadharshini.jpeg';
import MuraliImage from './TeacherVolunteer/Murali.jpeg';
import PriyalakshmiImage from './TeacherVolunteer/Priyalakshmi.png';


// Year card(School Histroy) details in About us
let cardsInfo = [
    {
        heading: "School History",
        subHead: "",
        content: "The Journey of Redmond Tamil School, established to offer quality education to Tamil-speaking children and the local community.",
    },
    {
        heading: "2000",
        subHead: "Foundation of Redmond",
        content: "A group of passionate parents and educators established the school to meet the educational needs of Tamil-speaking children in Redmond."
    },
    {
        heading: "2005",
        subHead: "Expansion and Growth",
        content: "The school expanded its programs to include a variety of extracurricular activities and language learning initiatives to support students’ cultural and linguistic development."
    },
    {
        heading: "2020",
        subHead: "New Campus",
        content: "The school moved to a larger campus with improved facilities, providing more space for classrooms, recreational activities, and student projects."
    },
    {
        heading: "2015",
        subHead: "Community Outreach",
        content: "Redmond Tamil School started various community outreach programs to engage with the local area and help Tamil-speaking families and individuals in the region."
    },
    {
        heading: "2010",
        subHead: "Technological Integration",
        content: "The school introduced digital learning tools and online platforms to enhance the learning experience for students and ensure continuity during the pandemic."
    }
]

// Mission,Vission,Values deatils and Contents
export let imageWithContent = [
    {
        imageValue: mission,
        headValue: "Mission",
        contentValue: [` "Redmond Tamil School (RTS) was established with the primary objective of teaching Tamil language and culture to children in the Seattle area. As an extension of Tamil education, RTS also fosters cultural activities such as music, dance, drama, and other art forms rooted in Tamil traditions. "`]
    },
    {
        imageValue: vision,
        headValue: "Vision",
        contentValue: [` "RTS aims to: Deliver a high-quality, consistent learning environment for children.Provide continuous learning opportunities that nurture their knowledge of Tamil language and culture over the years" `

            
        ]
    },
    {
        imageValue: values,
        headValue: "Values",
        subHead: "Students who successfully complete the final year will:",
        contentValue: ["Converse with each other in Tamil and exchange ideas without hesitation.",
            "Read, understand and write flawlessly Tamil.",
            "Interpret from English to Tamil and from Tamil to English smoothly.",
            "Knows the pride of Tamil language and Tamil language education",
            "Know the history of Tamil language and Tamil culture.",
            "Passionate about teaching Tamil to others."
        ]
    }
];

// Accreditation and Affiliation  images
export let imageCardValues = [
    tamilAcedmyImage,
    
];

// Teacher Volunteers  deatils 
export let admissionImagesWithDetails = [
    {
        imagePath: BhagyaImage,
        name: "Bhagya",
        details: "An excellent teacher dedicated to helping the next generation grow.",
        fullDetails: "Bhagya has been teaching for the past 4 years and has contributed greatly to the growth of the Tamil language in her community. Her passion and dedication to her work inspire her students to achieve their best."
    },
    {
        imagePath: KannanImage,
        name: "Kannan Meiappan",
        details: "Passionate about teaching and preserving Tamil culture.",
        fullDetails: "Kannan has been a part of the Redmond Tamil School community for over 9 years. His dedication to preserving Tamil culture and teaching the language to young minds is truly inspiring."
    },
    {
        imagePath: UdhayaImage,
        name: "Udhaya Rajkumar",
        details: "A dedicated Tamil teacher with a passion for heritage and language.",
        fullDetails: "Udhaya has been volunteering at the Redmond Tamil School since 2023. His dedication to teaching Tamil and preserving the culture is evident in every class he conducts."
    },
    {
        imagePath: AmrithaImage,
        name: "Amritha",
        details: "Sharing knowledge with children, inspired by the positive influence of past teachers.",
        fullDetails: "Amritha has been teaching Tamil to American students for 5 years. She is passionate about making the learning experience enjoyable and empowering for children."
    },
    {
        imagePath: AbiramiImage,
        name: "Abirami Murugan",
        details: "Teaching Tamil with a focus on creating a safe and supportive classroom environment.",
        fullDetails: "Abirami has been teaching for 2 years, bringing her own passion for the Tamil language and culture. She is committed to ensuring each student succeeds academically and socially."
    },
    {
        imagePath: PadmaImage,
        name: "Padma",
        details: "Teaching with a deep respect for culture and a desire to pass traditions to the next generation.",
        fullDetails: "Padma has been with Redmond Tamil School since 2016, teaching grades 1 through 5. Her approach to teaching ensures that students not only excel in Tamil but also connect with their heritage."
    },
    {
        imagePath: PriyaImage,
        name: "Priya Nallusamy",
        details: "Teaching Kindergarten and First Grade with a passion for the Tamil language.",
        fullDetails: "Priya has been teaching at RTS for 3 years, beginning with Kindergarten. She loves helping students learn Tamil and guiding them through their learning journey."
    },
    {
        imagePath: SudhaImage,
        name: "Sudha Vaithiyanathan",
        details: "Preserving the Tamil language by teaching preschoolers in a fun and engaging way.",
        fullDetails: "Sudha has been teaching Tamil for 2 years at RTS. She is passionate about making learning enjoyable for young children, while ensuring they understand the beauty of the Tamil language."
    },
    {
        imagePath: VaishnaviImage,
        name: "Vaishnavi",
        details: "A dedicated teacher teaching Kindergarten, 1st, and 2nd grade students.",
        fullDetails: "Vaishnavi joined RTS in 2019. She is passionate about teaching Tamil and sharing her love for the language with the future generation."
    },
    {
        imagePath: MaheswariImage,
        name: "Maheswari Balamurali",
        details: "Involved in teaching and preserving Tamil for over 10 years.",
        fullDetails: "Maheswari has been teaching at RTS for 10 years. She shares her love for Tamil and ensures students learn the language's rich history and culture."
    },
    {
        imagePath: PriyadharshiniImage,
        name: "Priyadharshini Nareshkumar",
        details: "A chemistry teacher turned Tamil educator, passionate about teaching young learners.",
        fullDetails: "Priyadharshini has been teaching KG-level students at RTS for the last 2 years. As a chemistry teacher in India, she brings a unique approach to her Tamil lessons."
    },
    {
        imagePath: MuraliImage,
        name: "Murali",
        details: "Teaching Tamil to kids with a deep love for the language and its literature.",
        fullDetails: "Murali has been volunteering at RTS for the past 4 years, and this year, he teaches grade 4B. His interest in Tamil history and literature has greatly enriched the students' learning experiences."
    },
    {
        imagePath: PriyalakshmiImage,
        name: "Priyalakshmi Jayapal",
        details: "Instilling a love for Tamil language and culture in her students.",
        fullDetails: "Priyalakshmi is an assistant teacher at Bellevue School District and has a passion for teaching Tamil. She strives to help students effectively absorb the language and express themselves."
    }
];


export let photoGallary = [
    HomeFirstImg,
    imageGal1,
    imageGal2,
    imageGal3,
    imageGal4,
    imageGal5,
    imageGal6,
    imageGal7,
    imageGal8,
    imageGal9,
    imageGal10,
    imageGal11,
    imageGal12,
    imageGal13,
    imageGal14
];

export let studentImageAndContent = [
    {
        imagePath: photo,
        name: "Science Olympiad Winner",
        details: "May 2024"
    },
    {
        imagePath: photo,
        name: "Art Exhibition Star",
        details: "April 2024"
    },
    {
        imagePath: photo,
        name: "Mathematics Genius Award",
        details: "March 2024"
    },
    {
        imagePath: photo,
        name: "Community Service Leader",
        details: "February 2024"
    },
    {
        imagePath: photo,
        name: "Athletics Champion",
        details: "January 2024"
    },
    {
        imagePath: photo,
        name: "Innovative Tech Creator",
        details: "December 2023"
    },
    {
        imagePath: photo,
        name: "Innovative Tech Creator",
        details: "December 2023"
    },
];


export let schoolTimings = [
    "When:Sundays, 10:00 AM – 11:30 AM for Grades PreK–4 (with an additional 30-minute enrichment session for Grades 5–8).",
    "Duration:Classes run from the first week of September to the first or second week of June, aligned with the Lake Washington School District calendar.",
    
   
];

// Administrative Contacts
export let commuincationProtocalsValues = [
    {
        emailValue: "john.doe@example.com",
        nameValue: "John Doe"
    },
    {
        emailValue: "jane.smith@example.com",
        nameValue: "Jane Smith"
    },
    {
        emailValue: "michael.brown@example.com",
        nameValue: "Michael Brown"
    },
    {
        emailValue: "emily.jones@example.com",
        nameValue: "Emily Jones"
    },
    {
        emailValue: "william.miller@example.com",
        nameValue: "William Miller"
    },
    {
        emailValue: "sarah.wilson@example.com",
        nameValue: "Sarah Wilson"
    }
];

// Library Information
export let libraryInformation = [
    {
        heading: "Welcome to our vibrant and comprehensive library, a cherished resource for our community! Managed and maintained by our dedicated RTS volunteers, our library boasts an extensive collection of over 1,000 titles, serving more than 450 students and their families.",
        subHeading: "Our library caters to a wide range of readers, ensuring there's something for everyone:",
        points: [
            "Younger Kids: Picture books, early readers, and engaging tales to spark the joy of reading.",
            "Older Kids: Chapter books, educational resources, and adventure stories to inspire and educate.",
            "Adults: A curated selection of novels, comedies, educational material, and stories for leisure or learning.",
            "We proudly offer books across diverse categories, including:",
            "Comedy: Lighthearted reads to brighten your day.",
            "Education: Informative resources to support academic growth and lifelong learning.",
            "Stories: Captivating narratives for readers of all ages.",
            "Our library is conveniently accessible every Sunday from 10:30 AM to 11:50 AM at the Bellevue College R Building lobby. During this time, our friendly library team will be available to assist you in exploring our collection, borrowing books, and answering any questions.",
            "Come visit us to discover a world of knowledge, laughter, and inspiration!"
        ]
    }
]

// Curriculum overview  details  of BASIC_LEVEL,INTERMEDIATE_LEVEL and ADVANCE_LEVEL
export const BASIC_LEVEL = [
    {
        heading: "MAZHALAI-1 (PRESCHOOL-1)",
        content: "Learn basic Tamil words and sentences with correct pronunciation, focusing on topics like family, colors, and animals. Build a strong foundation through simple vocabulary and meanings.",
        ageRequirement: "3 years",
        evaluationRequired: "No",
    },
    {
        heading: "MAZHALAI-2 (PRESCHOOL-2)",
        content: "Inspire curiosity by teaching kids basic Tamil words like shapes, animals, and colors. Using actions, pictures, and games to ensure correct pronunciation and understanding.",
        ageRequirement: "4 years",
        evaluationRequired: "No",
    },
    {
        heading: "KINDERGARTEN",
        content: "Teaching children simple Tamil through stories, games, and interactive tools to help them learn new words, sentences, and grammar. Focusing on writing and reading Tamil vowels, consonants, and combinations, with an emphasis on correct pronunciation, sound distinction, and grammatical rules.",
        ageRequirement: "5 years",
        evaluationRequired: "No",
    },
    {
        heading: "GRADE 1",
        content: "Develop Tamil speaking, writing, and reading skills through interactive methods like storytelling, games, and digital tools, focusing on pronunciation and sentence construction. Learn grammar concepts.",
        ageRequirement: "6 years",
        evaluationRequired: "Yes",
    },
];


export const INTERMEDIATE_LEVEL = [
    {
        heading: "GRADE 3",
        content: "Practice Tamil pronunciation, sentence formation, and comprehension through engaging plays and dramatization activities. Focus on writing and reading basic Tamil letters and words with correct pronunciation while understanding grammar concepts such as vowels, tenses, and consonant categories for effective language use.",
        ageRequirement: "8 years",
        evaluationRequired: "Yes",
    },
    {
        heading: "GRADE 4",
        content: "Use games and interactive activities to improve Tamil speaking skills, exploring different expressions and contexts. Practice writing 4-5 word sentences with correct letters and structure, focusing on proper formation and vocabulary. Recite Tamil literature like Thirukkural with correct pronunciation and understanding. Practice sentence construction, understand grammatical rules, and recognize the difference between words and their meanings.",
        ageRequirement: "9 years",
        evaluationRequired: "Yes",
    },
    {
        heading: "GRADE 5",
        content: "Start speaking Tamil through dramatization, focusing on correct intonation, voice modulation, and context-based expressions. Focus on writing clear, structured sentences. Grammar encompasses various aspects, such as suffix forms, tenses, verb conjugation, active and passive voice, tone changes, negative verb forms, and grammatical structures like compound sentences and subordinate clauses.",
        ageRequirement: "10 years",
        evaluationRequired: "Yes",
    },
];

export const ADVANCE_LEVEL = [
    {
        heading: "GRADE 6",
        content: "Speak Tamil in different scenarios with appropriate expressions and explore it through games and other activities. Act and express ideas with clear pronunciation in various contexts. Practice writing with clarity and correct structure, using learned vocabulary and concepts. Forms of suffixes, masculine/feminine, singular/plural, short/long vowels, word structures, tense markers, affirmative and negative forms, sound variations, compound words, and sentence construction.",
        ageRequirement: "11 years",
        evaluationRequired: "Yes",
    },
    {
        heading: "GRADE 7",
        content: "Speak with appropriate vocabulary, intonation, and correct pronunciation in various contexts. Write sentences using proper structure, punctuation, and vocabulary, and practice short to medium-sized sentences. Recite sentences, including Thirukkural, with correct intonation and understanding. Learn grammar, focusing on suffixes, masculine/feminine forms, sounds, tenses, and word structures.",
        ageRequirement: "12 years",
        evaluationRequired: "Yes",
    },
    {
        heading: "GRADE 8",
        content: "Practice speaking with proper intonation, pronunciation, and clarity in various contexts, including dramatization and literature like Thirukkural. Write clear and accurate sentences using correct structure, vocabulary, and punctuation. Read aloud with proper tone, focusing on understanding and context, while learning different language forms and sentence construction for clarity.",
        ageRequirement: "13 years",
        evaluationRequired: "Yes",
    },
];

// Assessment system  points
export let AssestmentSystemPoints = [
    "RTS assessment is based on ITA guidelines.",
    "Current ITA students must score 95% in monthly tests and projects during the year in their current grade.",
    "They must meet the appropriate age criteria for the requested grade."
];

export let blogPoints = [
    "Cultural Performances: Be captivated by traditional dances, engaging skits, and artistic showcases by our talented students.",
    "Community Bonding: A heartwarming gathering that fosters connections among families and friends while celebrating shared heritage.",
    "Festive Atmosphere: A vibrant and family-friendly setting filled with the sights and sounds of Tamil culture."
]

export let classSchedulePoints = [
    {
        Details: [
            'When:Sundays, 10:00 AM – 11:30 AM for Grades PreK–4 (with an additional 30-minute enrichment session for Grades 5–8).',
            'Duration:Classes run from the first week of September to the first or second week of June, aligned with the Lake Washington School District calendar.',
            'Location:Bellevue College (R and L buildings).'
        ]

    },
    "In addition to regular lessons, we celebrate major Tamil holidays, including Pongal, allowing students to immerse themselves in Tamil traditions and cultural celebrations.",
    "Join us at RTS in fostering the next generation of Tamil speakers and cultural ambassadors, explore the Tamil language and culture in a vibrant, supportive environment!"
]

// Assessment Table
export let assesMentTable = [
    {
      heading: [
        "For new students fluent with reading/writing and comprehension and older than six years",
        "For younger students (up to 6 years old) and new students not fluent with Tamil they are assigned a grade based on their age and basic Tamil understanding"
      ],
      firstCol: [
        "The age is used as a criteria for the grade to which they can be tested",
        "If the student gets a high grade (A and above) they will be assigned to the grade they tested for",
        "If the student gets a B they will be assigned one grade lower",
        "If the student gets a C they will be assigned two grades lower than they tested for",
        "They won't be assigned any lower than Advanced KG"
      ],
      secondCol: [
        "Less than four years (we ask them to come the next year)",
        "Four years old (Preschool 2)",
        "Five years old (First grade)",
        "Six years and older (Advanced KG)"
      ]
    }
  ];
  
  
  
  
export default cardsInfo;