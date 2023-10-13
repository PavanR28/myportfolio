import {
  mobile,
  backend,
  creator,
  web,
  virtusa,
  tm,
  univnt,
  facerecog,
  facemask,
  smartdust,
  saa,
  plag,
  rockpaper,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python, Java, JavaScript SQL,React, Angular, Bootstrap, HTML, CSS",
    icon: web,
  },
  {
    title: "Django, Flask, Django Rest, Hibernate, Spring, AWS, AZURE, NodeJS",
    icon: mobile,
  },
  {
    title: "Oracle, MS Access, MYSQL, NoSQL, MongoDB, Dynamo DB, Cassandra, PostgreSQL",
    icon: backend,
  },
  {
    title: "Pycharm, GIT, JIRA, Jenkins, Eclipse, Microsoft Visual Studio Code,Splunk",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Graduate Student Assistant",
    company_name: "University of North Texas",
    icon: univnt,
    iconBg: "#383E56",
    date: "December 2021 – May 2023",
    points: [
      "Integrated and streamlined responsive web applications, significantly reducing latency by 70% with the utilization of Python technologies, including Flask, Django, XML, JavaScript, and PostgreSQL, in combination with modern web development tools and frameworks.",
      "Leveraged cutting-edge design and development techniques, along with modern database architecture, to design and deploy highly optimized landing pages, resulting in a remarkable 40% improvement in User Interface (UI) and User Experience (UX).",
    ],
  },
  {
    title: "Python Full Stack Developer",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#383E56",
    date: "July 2020 - August 2021",
    points: [
      "Resolved 100% of server module issues through strategic design enhancements.",
      "Architected robust back-end solutions with Python, Django, and front-end technologies, resulting in a 30% boost in application performance. Employed PostgreSQL for seamless database management.",
      "Integrated ReactJS, resulting in a 40% surge in efficiency. Engineered and deployed Restful microservices with Flask and Django on AWS servers for scalability and performance.",
      "Implemented CI/CD pipelines via CircleCI, achieving a 50% improvement in resource allocation."
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Tech Mahindra",
    icon: tm,
    iconBg: "#E6DEDD",
    date: "May 2019 - April 2020",
    points: [
      "Developed a Django application with RESTful API, achieving a 30% improvement in data collection efficiency and ensuring 100% data integrity.",
      "Constructed SQL queries for CRUD operations, optimizing data retrieval and processing, resulting in a 40% increase in database performance.",
      "Implemented client-side validation using JavaScript and jQuery, ensuring 95% data accuracy and integrity. Established a robust unit test framework, enhancing code reliability by 50%.",
      "Utilized Python modules (Numpy, SciPy, Pandas, and Pygal) for graphical data representation, providing clear insights for data analysis. Integrated PEP coding conventions, improving code maintainability by 30%."
    ],
  },
];


const projects = [
  {
    name: "Cloud-Based-Face-Recognition-Application-with-IoT-Edge-Device-Integration",
    description:
      "Developed a Sentiment Analysis tool utilizing NLP techniques, achieving a 92% accuracy in categorizing user-generated content from various social media platforms.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow-openCV",
        color: "green-text-gradient",
      },
      {
        name: "Rasberry Pi",
        color: "pink-text-gradient",
      },
    ],
    image: facerecog,
    source_code_link: "https://github.com/PavanR28/Cloud-Based-Face-Recognition-Application-with-IoT-Edge-Device-Integration",
  },
  {
    name: "Mask Detection using CNN",
    description:
      "Designed and implemented a pivotal Convolutional Neural Network (CNN) achieving an impressive 95% accuracy for Face Mask Detection, significantly enhancing COVID-19 safety protocols.Exhibited expertise in machine learning, image processing, and coding, resulting in a top 5 finalist position in the Idea Innovation Contest, leading to qualification for MSME funding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: facemask,
    source_code_link: "https://github.com/PavanR28/Mask-Detection-using-CNN",
  },
  {
    name: "Smart Dust Bin",
    description:
      "Utilized technical skills in robotics and data analysis to design and implement a Robotic Smart DustBin, attaining a precision rate of 92%.Orchestrated the integration of real-time data visualization with React and PyCharts, resulting in a 25% improvement in waste level monitoring and a notable boost in system performance.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
    ],
    image: smartdust,
    source_code_link: "https://github.com/PavanR28/Smart-Dust-Bin",
  },
  {
    name: "Sequence Alignment Algorithms",
    description:
      "Sequence alignment is a technique used in bioinformatics to compare and analyze DNA, RNA, or protein sequences. The goal is to identify similarities between the sequences that may be a consequence of functional, structural, or evolutionary relationships. In this process, the sequences are arranged in a matrix, with gaps inserted between the residues to align similar characters in successive columns.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: saa,
    source_code_link: "https://github.com/PavanR28/Sequence-Alignment-Algorithms-master/",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "A simple game which a user plays with computer. There are both console application and GUI(Tkinter) versions for this game. Working: 1.User throws his choice (among Rock, Paper, Scissors)2.The computer program throws a counter to the user randomly.3.These are taken as input and point is added to the player accorinding to priority.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pycharm",
        color: "green-text-gradient",
      },
      {
        name: "Tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: rockpaper,
    source_code_link: "https://github.com/PavanR28/RockPaperScissors-master",
  },
  {
    name: "Plagiarism checker Python",
    description:
      "We all know that computers are good with numbers; so in order to compute the similarity between two text documents, the textual raw data is transformed into vectors => arrays of numbers and from that, we make use of basic knowledge of vectors to compute the similarity between them.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit_learn",
        color: "green-text-gradient",
      },
      {
        name: "PyCharm",
        color: "pink-text-gradient",
      },
    ],
    image: plag,
    source_code_link: "https://github.com/PavanR28/Plagiarism-checker-Python-master",
  },
];

const pinfo = [
  "https://github.com/PavanR28",
  "https://www.linkedin.com/in/pavanrapolu",
  "rapolu.pavann@gmail.com",
  "https://docs.google.com/document/d/11TWABDAJKoQOPcvzzFocMoSAcHxIDCy1",
  "+19407583931",
  "Pavan Rapolu - Dallas, TX."
]



export { services, experiences, projects, pinfo };
