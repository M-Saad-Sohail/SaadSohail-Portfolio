import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Bragdeal from "../../public/bradeal-saas.jpg";
import QuizApp1 from "../../public/Project1-saad.png";
import QuizApp2 from "../../public/Project2-saad.png";
import WeatherApp from "../../public/Project3-weatherapp.png";
import TodoApp from "../../public/Project4-TodoApp.png";
import StopWatch from "../../public/Project4-TodoApp.png";

function Projects() {
  const projectsData = [
    {
      image: Bragdeal.src,
      projectName: "Bragdeal SaaS",
      projectLink: "https://saadsohail-quizapp-react.netlify.app",
      projectDescription:
        "Designed and implemented frontend for a multi-role SaaS platform (Superadmin, Agency, User) with role-based management. Built real-time ticketing with Firebase, enabling Agencies to submit tickets with attachments, track issues, and live chat with Superadmin. Integrated Stripe for subscription and payment processing across roles. Contributed to API integration, Redux Toolkit setup, and frontend design using Next.js and Laravel.",
      projectTech: ["Next Js", "Tailwind Css", "Stripe", "Redux Toolkit"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://bragdeal-saas.vercel.app/login",
      },
    },
    {
      image: QuizApp2.src,
      projectName: "QuizApp-Add-Question",
      projectLink: "https://saadsohail-quizapp-react.netlify.app/add",
      projectDescription:
        "This is the second part of Quiz App where you can add questions and then go back to Quiz which is performed using Context Api & React Routing.",
      projectTech: ["React Js", "Tailwind Css", "React Routing", "Context Api"],
      projectExternalLinks: {
        github: "https://github.com/M-Saad-Sohail/QuizApp-React",
        externalLink: "https://saadsohail-quizapp-react.netlify.app/add",
      },
    },
    {
      image: WeatherApp.src,
      projectName: "TodoApp React",
      projectLink: "https://m-saad-sohail.github.io/Weather-App/",
      projectDescription:
        "I created his Weather App using Weather Api and React Js. I fecthed data from the Api and the styling is performed using Tailwind Css",
      projectTech: ["React Js", "Tailwind Css", "Weather Api"],
      projectExternalLinks: {
        github: "https://github.com/M-Saad-Sohail/Weather-App",
        externalLink: "https://m-saad-sohail.github.io/Weather-App/",
      },
    },
    {
      image: TodoApp.src,
      projectName: "TodoApp React",
      projectLink: "https://m-saad-sohail.github.io/TodoApp-React-Js/",
      projectDescription:
        "I created this TodoApp which can let you Add Todos, Delete todos, and you can also edit those Todos all these Functionalities were implemented using React useState hook and styled using Tailwind Css.",
      projectTech: ["React Js", "Tailwind Css"],
      projectExternalLinks: {
        github: "https://Github.com/M-Saad-Sohail/TodoApp-React-Js/",
        externalLink: "https://m-saad-sohail.github.io/TodoApp-React-Js/",
      },
    },
    {
      image: StopWatch.src,
      projectName: "Stop Watch",
      projectLink: "https://saadsohail-stopwatch.netlify.app/",
      projectDescription:
        "I created a Stop Watch using HTML5, CSS3 & JavaScript.I have also added sound effect using a small audio which is handled through an API to handle Infinite play without pause or Glitch,I have also added background animation using Css and the styling is completed using Tailwind Css. ",
      projectTech: ["HTML5", "CSS3", "JavaScript ES6", "Tailwind Css"],
      projectExternalLinks: {
        github: "https://github.com/M-Saad-Sohail/Stop-Watch",
        externalLink: "https://saadsohail-stopwatch.netlify.app/",
      },
    },
    // {
    //   image: "/project3.png",
    //   projectName: "TodoApp React",
    //   projectLink: "https://m-saad-sohail.github.io/TodoApp-React-Js/",
    //   projectDescription:
    //     "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
    //   projectTech: [
    //     "React",
    //     "Node.js",
    //     "Firebase",
    //     "MongoDB",
    //     "Express",
    //     "Redux Toolkit",
    //   ],
    //   projectExternalLinks: {
    //     github: "",
    //     externalLink: "",
    //   },
    // },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}>
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link">
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link">
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
