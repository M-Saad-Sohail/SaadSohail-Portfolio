import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import SaadImg from "../../public/saad.jpg";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}>
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! I'm Saad Sohail, a passionate Front-End Developer
            specializing in Next.js, React.js, and React Native. I craft
            engaging and intuitive web and mobile applications, emphasizing
            responsive design and seamless user experiences.
          </p>
          <p className="about-grid-info-text">
            My expertise lies in building visually appealing UIs with Tailwind
            CSS and managing complex state using Redux Toolkit. I have hands-on
            experience integrating APIs, enhancing application performance, and
            ensuring maintainability. Additionally, I have foundational
            knowledge of TypeScript, Python, Java, and C.
          </p>
          <p className="about-grid-info-text">
            I am constantly learning and staying up-to-date with industry
            trends, striving to push the boundaries of innovation in web and
            mobile development. I thrive in collaborative environments, working
            closely with designers and backend teams to deliver dynamic,
            user-centric solutions.
          </p>
          <p className="about-grid-info-text">
            I'm always open to new opportunities where I can leverage my skills
            and contribute to impactful projects. Feel free to reach out to me
            at saadsohail232005@gmail.com or connect with me on LinkedIn. Let's
            create something amazing together!
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies and skills that I’ve mastered and
            continue to explore throughout my journey:
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={SaadImg.src} alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
