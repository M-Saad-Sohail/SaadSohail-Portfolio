import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I am a skilled Front-End Developer actively seeking new opportunities in
        the industry. I am excited about the prospect of joining a dynamic team
        and making a significant impact through my technical abilities and
        creative mindset.
      </p>
      <div className="contact-cta">
        <Button link="mailto:saadsohail232005@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
