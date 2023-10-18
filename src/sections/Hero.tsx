import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Saad Sohail.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I craft things for the web.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Experienced Front-End Developer with a strong command of HTML5, CSS3,
        and JavaScript, coupled with proficiency in modern frameworks such as
        Bootstrap, Tailwind CSS, React.js, Next.js, and Typescript. Skilled in
        Firebase for real-time database management, authentication, and hosting
        solutions. Committed to crafting seamless and visually appealing user
        experiences, I bring a creative mindset and technical expertise to every
        project. Passionate about staying up-to-date with the latest trends and
        technologies in web development, I am dedicated to delivering
        high-quality, user-friendly interfaces. {" "}
        {/* <Link
          href="https://www.linkedin.com/company/trafix-llc/"
          target="_blank"
          className="link"
        >
          TRAFIX LLC.
        </Link> */}
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        {/* <Button
          text="Check out my course"
          link="https://youtube.com/kishansheth21"
        /> */}
      </motion.div>
    </div>
  );
}

export default Hero;
