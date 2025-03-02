import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="skills"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}>
      <div className="title">
        <h2>Skills</h2>
      </div>
      <ul className="about-grid-info-list">
        <li className="about-grid-info-list-item">Next.js</li>
        <li className="about-grid-info-list-item">React Js</li>
        <li className="about-grid-info-list-item">React Native</li>
        <li className="about-grid-info-list-item">JavaScript</li>
        <li className="about-grid-info-list-item">Html5</li>
        <li className="about-grid-info-list-item">CSS3</li>
        <li className="about-grid-info-list-item">Firebase</li>
        <li className="about-grid-info-list-item">Tailwind Css</li>
        <li className="about-grid-info-list-item">Typescript</li>
        <li className="about-grid-info-list-item">Java</li>
        <li className="about-grid-info-list-item">C</li>
        <li className="about-grid-info-list-item">Python</li>
      </ul>
    </motion.div>
  );
}

export default Skills;
