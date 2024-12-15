import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import FindALocation from "./FindALocation/FindALocation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import contactImg from "../assets/images/contact.png";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SECRET_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Submitted successfully!");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          toast.error(error.message || error);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>VitaCare | Contact</title>
      </Helmet>
      <FindALocation />
      <section>
        <div className="container mt-10 md:mt-16 ">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            Contact <span className="text-primaryColor">Us</span>
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text__para">
            Go a Technical issuer? Want to send feedback about a beta feature?
            Let us know.
          </p>

          <div className=" lg:flex lg:gap-32">
            <div data-aos="fade-right">
              <form className="space-y-8 lg:w-[700px]" 
              ref={form} onSubmit={sendEmail}>
                <div>
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="form__input mt-1"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="form__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Let us know we can help you?"
                    className="form__input mt-1"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    rows="6"
                    placeholder="Leave a comment..."
                    className="form__input mt-1"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn rounded sm:w-fit">
                  Submit
                </button>
              </form>
            </div>
            <div 
            data-aos="fade-left"
            className="w-[500px] h-[500px] lg:block hidden"
            >
              <img
                src={contactImg}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
