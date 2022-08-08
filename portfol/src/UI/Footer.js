import React from "react";
import "./Footer.css";
import fb from "../UI/Images/fb.png";
import insta from "../UI/Images/insta.png";
import linkedin from "../UI/Images/linkedin.png";
import github from "../UI/Images/GITHUB_git.png";
import send from "../UI/Images/send.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_evtkeg8",
        "template_xh9m1hs",
        e.target,
        "VkzTFEKOwi10nMXZw"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Successfully sent", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark", 
          });
        },
        (error) => {
          toast.error("Failed to send", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark", 
          });
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div className="footer">
        <section className="contact-info">
          <span className="contactus">Get in Touch</span>
          <br />
          <br />
          <span className="address">
            Plot No. 76 , Block road
            <br />
            Bellaguntha,Ganjam
            <br />
            Odisha,761119{" "}
          </span>
          <br />
          <span className="address">
            Mobile : (+91) 8908512995
            <br />
            Email : asish.kumar10101@gmail.com
          </span>
          <br />
          <br />
          <br />
          <span className="social-media">
            <a href="https://www.facebook.com/ashis.nayak.712">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/akndipu/">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/asish-kumar-nayak-3126a1152/">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/akndipu">
              <img src={github} alt="Github" />
            </a>
          </span>
        </section>
        <section className="form">
          <form onSubmit={sendEmail} className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your Name"
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="e.g : abc@gmail.com"
              required
            />

            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="subject.."
              required
            />
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Type your Message..."
              required
            ></textarea>
            <button type="submit" className="btn btn-form ">
              <img src={send} className="img-fluid-send" alt="message" /> Send
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
          <span className="copyright">
            &#169; Designed & Developed by Asish
          </span>
        </section>
      </div>
    </>
  );
}

export default Footer;
