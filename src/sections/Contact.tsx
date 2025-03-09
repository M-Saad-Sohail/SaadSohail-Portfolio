import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

function Contact() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/M-Saad-Sohail/",
    },
    {
      name: "WhatsApp",
      icon: <BsWhatsapp />,
      link: "https://wa.me/03120724480",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/m-saad-sohail/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/mohammad_saad_sohail/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/Saad_Sohail123",
    },
  ];
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
      }}>
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
      <motion.div
        className="social-icons-contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.95,
        }}>
        <ul className="social-icons-contact-list">
          {socialLinks.map(({ name, icon, link }) => (
            <li
              key={name}
              title={name}
              className="social-icons-contact-list-item">
              <Link
                href={link}
                className="social-icons-contact-list-item-link"
                target="_blank">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
