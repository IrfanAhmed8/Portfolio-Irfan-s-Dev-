import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import '../styles/contact.css'

function Contact() {
  return (
    <div id='contact'  data-aos="fade-up" className="contact-container">
      <h1 className="contact-title">Contact</h1>

      <div className="contact-links">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jafriirfan37@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  <FaEnvelope /> Gmail
</a>

        <a
          href="https://www.linkedin.com/in/irfan-ahmed-jafri-9937a9288/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/IrfanAhmed8"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://leetcode.com/u/irfan66/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode /> LeetCode
        </a>

        <a href="tel:8424097584">
          <FaPhone /> 8424097584
        </a>
      </div>
    </div>
  );
}

export default Contact;