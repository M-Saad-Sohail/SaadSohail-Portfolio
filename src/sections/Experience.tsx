import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "TRAFIX LLC",
      role: "Software Engineer Intern",
      url: "https://www.linkedin.com/company/trafix-llc/",
      start: "October 2022",
      end: "March 2023",
      shortDescription: [
        "As a Software Engineer Intern at TRAFiX LLC, I have developed expertise in C# programming language and software design patterns. Some of my notable achievements include:",
        "- Developed a robust client-server application using C# and WPF that provides a user-friendly interface for clients to interact with the server and access various features of the application and implemented various software design patterns like MVC, MVVM, Singleton, and Factory to ensure the application is modular, maintainable, and testable.",
        // "- Learned and implemented various software design patterns like MVC, MVVM, Singleton, and Factory to ensure the application is modular, maintainable, and testable.",
        "- Developed and integrated the UI of the application with the back-end logic and functionality.",
        // "- Developed and implemented various features and enhancements to the application.",
        "- Implemented WCF for the application's communication protocol, ensuring reliable and secure data transfer between client and server.",
        "- Worked on bug fixing and troubleshooting to improve the stability and reliability of the application.",
        "Skills: Client-server Application Development · Windows Presentation Foundation (WPF) · Transmission Control Protocol (TCP) · ASP.NET · Windows Communication Foundation (WCF) · Networking · Software Design Patterns · C#"
        ],
    },
    {
      name: "IEC · Apprenticeship",
      role: "DevOps Engineer",
      url: "https://www.linkedin.com/school/emergingcareers/",
      start: "October 2021",
      end: "January 2023",
      shortDescription: [
        "- Trained in IT fundamentals, AWS Cloud, and professional skills.",
        "- Built IT fundamental skills, including working knowledge of Linux OS, and writing scripts in Python and Shell.",
        "- Learned how to apply core AWS services in the area of computing, storage, and networking, including EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS, and Route 53.",
        "- Demonstrated strong verbal and written communication skills, including the ability to explain technical information and terminology to non-technical end users.",
        "Skills: Containerization · Amazon Web Services (AWS) · Python (Programming Language) · Shell Scripting · GitHub · Linux · Amazon EC2 · Amazon S3 · Amazon ECS · AWS Lambda · AWS CodePipeline · AWS Command Line Interface (CLI) · AWS Security · DevOps",
      ],
    },
    // {
    //   name: "ACES",
    //   role: "President",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2019",
    //   end: "November 2020",
    //   shortDescription: [
    //     "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
    //     "Additionally, I secured sponsorships from reputable brands to support our events.",
    //     "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
    //   ],
    // },
    // {
    //   name: "ISTE",
    //   role: "Web Developer",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2019",
    //   end: "November 2020",
    //   shortDescription: [
    //     "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    //     "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    //     "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    //   ],
    // },
    // {
    //   name: "Shashaan",
    //   role: "Founder",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "November 2018",
    //   end: "November 2021",
    //   shortDescription: [
    //     "While still a student, I founded a web hosting company that offered affordable hosting services.",
    //     "With over 300 customers, the business thrived until I graduated and sold it to another company.",
    //   ],
    // },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
