import "./contact.scss";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial:{
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, 
    }
  }
}

const Contact = () => {

  const formRef = useRef();
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ns1y989', 'template_mb2dv5p', formRef.current, {
        publicKey: 'GvAbT8Z2B7nwWtCC8',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Contact</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>knoro1226@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>
              628 Williamson Ave Apt 3024
              <br />
              Fullerton, CA 92832
            </span> 
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>310-349-9568</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" required placeholder="Name" name="name"/>
            <input type="email" required placeholder="Email" name="email"/>
            <textarea rows={8} placeholder="Message" name="message"/>
            <button>Submit</button>
            {error && "Error"}
            {success && "Email Sent!"}
          </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact