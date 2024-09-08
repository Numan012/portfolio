import React, { useState } from "react";
import "../styles/contact.css";
import Heading from "../common/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "135a6453-c5c9-4b71-8ddd-ad0eea885433");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div>
        <Heading heading="Get In Touch" />
      </div>

      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail
                style={{ width: "2rem", height: "2rem" }}
                className="icon"
              />
              <a href="mailto:atifarshad593@gmail.com">
                rananoumaniqbal@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <IoCall
                style={{ width: "2rem", height: "2rem" }}
                className="icon"
              />
              <a href="tel:0324-5725778">+92 308 4697598</a>
            </div>
            <div className="contact-detail">
              <FaLocationDot
                style={{ width: "2rem", height: "2rem" }}
                className="icon"
              />
              <p>Lahore, PK</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Write your Message here</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
            >
              {isSubmitting ? "Sending..." : "Submit now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;