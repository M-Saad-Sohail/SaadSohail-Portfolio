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

  const experiences = [
    {
      name: "Hztech",
      role: "Associate Software Developer",
      url: "https://www.linkedin.com/company/hztech/",
      start: "June 2024",
      end: "Present",
      shortDescription: [
        "Worked on multiple SaaS projects, focusing on API integration and state management with Redux Toolkit in a Next.js environment.",
        "Developed cross-platform React Native applications for Android and iOS, collaborating with backend teams for seamless data flow.",
        "Built frontend for a multi-role SaaS platform with role-based management, real-time ticketing using Firebase, and Stripe integration for payments.",
        "Contributed to API integration, Redux Toolkit setup, and frontend design using Next.js and Laravel.",
        "Developed Post Auto Pilot app with social media post creation, account connection via QR code, and advanced navigation for a user experience similar to Social Pilot.",
        "Built an Instagram-like React Native app with tattoo simulation, comment sections, chat system, and appointment scheduling, leveraging Redux Toolkit for state management.",
        "Created a community platform with dynamic content display, functional authentication, and OTP-enabled password recovery.",
        "Skills: Next.js · React Native · API Integration · Redux Toolkit · Cross-platform Development",
      ],
    },
    {
      name: "Falconxoft",
      role: "Associate Software Developer",
      url: "https://www.linkedin.com/company/falconxoft/",
      start: "May 2024",
      end: "June 2024",
      shortDescription: [
        "Worked on dynamic web applications using React.js and Next.js, focusing on responsive and interactive user interfaces.",
        "Implemented state management with Redux Toolkit to efficiently handle complex application states.",
        "Integrated RESTful APIs, ensuring smooth data flow between frontend and backend systems.",
        "Enhanced backend development skills with Django and Django Rest Framework (DRF), building robust APIs and managing databases.",
        "Focused on design and UI/UX improvements using CSS and Tailwind CSS, maintaining a clean and consistent look across devices.",
        "Collaborated with cross-functional teams to deliver high-quality features, optimizing application performance and user experience.",
        "Gained experience in full-stack development, contributing to both frontend and backend solutions.",
        "Skills: React.js · Next.js · Redux Toolkit · API Integration · Django · Django Rest Framework · Tailwind CSS · Full-Stack Development",
      ],
    },
    {
      name: "Markhorverse",
      role: "Web Developer Intern",
      url: "https://www.linkedin.com/company/markhorverse/",
      start: "May 2024",
      end: "June 2024",
      shortDescription: [
        "Gained practical experience in web development using HTML, CSS, and JavaScript, focusing on creating responsive and interactive user interfaces.",
        "Collaborated with designers and backend developers to implement dynamic web pages, ensuring seamless integration of frontend and backend functionalities.",
        "Enhanced design aesthetics and user experience by utilizing modern CSS techniques, including Flexbox and Grid layouts.",
        "Developed reusable components and optimized code for better performance and maintainability.",
        "Participated in team meetings, effectively communicating ideas and contributing to project discussions, demonstrating strong teamwork and collaboration skills.",
        "Adapted to fast-paced project requirements, consistently delivering high-quality results within deadlines.",
        "Skills: HTML · CSS · JavaScript · Responsive Design · Team Collaboration · UI/UX Enhancement",
      ],
    },
    // {
    //   name: "Jawan Pakistan",
    //   role: "Front-End Developer",
    //   url: "https://www.linkedin.com/company/jawan-pakistan/",
    //   start: "December 2022",
    //   end: "Present",
    //   shortDescription: [
    //     "Designed and developed 80% of the frontend interface, focusing on intuitive user interaction and real-time camera feed monitoring with motion detection.",
    //     "Integrated alerting functionalities for prompt notifications on suspicious activity.",
    //     "Skills: Front-End Development · React.js",
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
      }}>
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}>
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
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
