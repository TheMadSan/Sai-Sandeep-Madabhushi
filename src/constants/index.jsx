import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { BiLogoGmail } from "react-icons/bi";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  // { label: "Skills", href: "#skills" },
  { label: "Skills", href: '#technologies'},
  { label: "Experience", href: '#experience' },
  { label: "Projects", href: "#projects" },
  // { label: "Award", href: "#award" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Sai Sandeep Madabhushi",
  info: "Master's student at UC Irvine and a Full-stack developer with a passion for crafting efficient software solutions.",
};

export const ABOUT = {
  text1:
    "I develop cutting-edge software solutions, leveraging both technical expertise and creative problem-solving.",
  text2:
    "Hi, I'm Sai Sandeep Madabhushi, a highly skilled Software Engineer with a passion for crafting efficient and scalable software solutions. With a Master's in Computer Science from the University of California, Irvine, and over 2 years of professional experience, I excel in developing distributed systems, real-time data processing, and serverless architectures. My technical proficiency spans a wide range of technologies, including Python, C++, Java, Docker, Kubernetes, AWS, and Apache Kafka. I thrive on solving complex problems and delivering high-quality, impactful solutions. Beyond coding, I am always exploring the latest tech trends and innovations, ensuring that my work remains at the cutting edge. Dedicated to excellence, I collaborate with cross-functional teams to enhance system performance, reduce costs, and improve scalability in every project.",
};

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Photography Wesbite",
    subtitle:
      "This is a Photography Website project! This website showcases a photography portfolio with a modern design, built using HTML, CSS, and JavaScript.",
    image: image2,
    link: 'https://github.com/TheMadSan/PhotographyWebsite'
  },
  {
    title: "Medical Data Visualization Tool",
    subtitle: "A high-performance Windows desktop application for real-time medical data visualization using C# and .NET Framework.",
    image: image3,
    link: 'https://github.com/TheMadSan/Medical-Data-Visualization-Tool-Windows-'
  },
  
  // {
  //   title: "Weather Dashboard",
  //   subtitle:
  //     "A weather dashboard application built with Vue.js and Express.js.",
  //   image: image5,
  // },
  {
    title: "Web Chess",
    subtitle:
      "This is a simple Chess game designed using HTML, CSS, and JavaScript. The game is fully playable in a web browser and supports all the standard rules of Chess.",
    image: image6,
    link: 'https://github.com/TheMadSan/MyChessGame'
  },
  {
    title: "Dark-Amazon",
    subtitle:
      "This is a web application which is used to introduce the dark theme in amazon application. It is a desktop version and it helped me to explore React.js and Google Firebase.",
    image: image1,
    link: 'https://my-app-ed2a7.web.app/'
  }
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "mailto:ssm@uci.edu",
    icon: <BiLogoGmail fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/saisandeep43",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

export const EXPERIENCES = [
  {
    year: "Jun ' 24 - Sep ' 24",
    role: "Software Engineering Intern",
    company: "Engage3, Powered by Dexi",
    description: "Developed and maintained CI/CD pipelines to automate the deployment of applications, ensuring quick and reliable releases. Architected a distributed data processing system using Apache Kafka and Hadoop that increased the processing speed by 40% and reduced processing costs by 30%.",
    technologies: ["Python", "Snowflake", "PostgreSql", "AWS", "Apache Kafka", "Hadoop"]
  },
  {
    year: "Jan ' 24 - Jun ' 24",
    role: "Software Development Engineer - Apprentice",
    company: "Amazon Web Services (AWS)",
    description: "Collaborated with AWS and contributed to the open-source development of a real-time audio and chat translation feature for Amazon Connect, enhancing accessibility and customer service for over 1000+ daily users. Developed and integrated AWS Lambda functions, Kinesis Media Streams and APIs such as AWS Transcribe, Translate and Polly into Amazon Connect, achieving 95% translation accuracy and improving response time by 30%.",
    technologies: ["Python", "AWS", "WebRTC", "Git"]
  },
  {
    year: "Jul ' 21 - Aug ' 23",
    role: "Software Engineer",
    company: "Tata Consultancy Services (TCS)",
    description: "Collaborated with cross-functional teams to design and implement a distributed microservices architecture using Docker and Kubernetes, improving the system scalability by 50% and reducing deployment time by 30%. Developed and maintained CI/CD pipelines with automated tests to ensure bug-free code accuracy and minimized production issues by 30%. Actively participated in troubleshooting data, analyses, and code, and demonstrated ability to identify root causes, propose effective solutions and took responsibility in implementing next steps. Designed and developed serverless architectures using AWS services such as Lambda, API Gateway, S3, and DynamoDB resulting in improvement in system performance and 40% reduction in infrastructure costs.",
    technologies: ["Python", "AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Linux"]
  }
];
