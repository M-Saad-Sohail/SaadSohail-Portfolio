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
            Bonjour! I&apos;m Saad Sohail, a Front-End Developer specializing in
            Next.js, React.js, and React Native. I build responsive,
            high-performance web and mobile applications with a keen eye for
            UI/UX.
          </p>
          <p className="about-grid-info-text">
            Skilled in Tailwind CSS, Redux Toolkit, and API integration, I focus
            on creating scalable and maintainable solutions. I also have a
            foundation in TypeScript, Python, Java, and C.
          </p>
          <p className="about-grid-info-text">
            Passionate about innovation, I collaborate with teams to craft
            seamless user experiences. Open to opportunities—let&apos;s connect
            and build something amazing!
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
