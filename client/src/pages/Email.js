import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../EmailStyle.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gj5fcam', 'template_jw1jue6', form.current, 'SK6EGaqF0eThnX2Q4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">EMAIL US!</h2>
        <form ref={form} onSubmit={sendEmail}

          className="--form-control --card
             --flex-center --dir-column">
          <input
            type="text"
            placeholder="full Name"
            name="user_name" required />

          <input type="email"
            placeholder="EMAIL"
            name="user_email" required />

          <input type="text"
            placeholder="Quiz title"
            name="user_subject" required />

          <textarea placeholder="Please discribe the Issue:" name="message"
            cols="30" rows="10"></textarea>
          <button type="submit" className="--btn
              btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;














