import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
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
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Saad Sohail,Accomplished Front-End Developer
            adept in utilizing cutting-edge technologies, including HTML5, CSS3,
            and JavaScript, to create engaging and intuitive web applications.
            Proficient in popular frameworks such as Bootstrap, Tailwind CSS,
            React.js, Next.js, and Typescript, I bring a unique blend of
            creativity and technical expertise to the table. My mastery extends
            to Firebase, where I manage real-time databases, authentication
            processes, and hosting solutions seamlessly.
          </p>
          <p className="about-grid-info-text">
            Throughout my education, I am deeply passionate about crafting
            visually stunning and seamlessly functional user interfaces, always
            pushing the boundaries of innovation in web development. My
            commitment to staying abreast of the latest industry trends
            underscores my dedication to delivering exceptional and
            user-friendly digital experiences.
            {/* <Link
              href="https://www.linkedin.com/company/trafix-llc/"
              className="link"
              target="_blank"
            >
              TRAFiX LLC
            </Link> */}
          </p>

          <p className="about-grid-info-text">
            I get excited about opportunities where I can practice my Solution
            Front-End skills in the industry and make some contribution on my
            behalf.
          </p>
          <p className="about-grid-info-text">
            I love connecting with new people, you can reach me at
            saadsohail232005@gmail.com or here on LinkedIn.
            {/* <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link> */}
            &nbsp;Aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies and skills that I’ve learned and still
            working with recently throughout my exciting journey:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Html5</li>
            <li className="about-grid-info-list-item">CSS3</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Tailwind Css</li>
            <li className="about-grid-info-list-item">React Js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Next.js</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/saad.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
