import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toastSuccessNotify } from "../helper/toastify";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6zg83g",
        "template_f54jks9",
        e.target,
        "WiwRCoJBt8xAr2rtz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      toastSuccessNotify("Email has been sent successfully.")
  };

  return (
    <div
      style={{
        height: "450px",
        borderRadius: "1rem",
        fontFamily: "Inter, sans-serif",
        margin: "auto",
        width:"400px"
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
          marginTop: "2rem",
          fontSize:"1.3rem",
          fontWeight:"700"
        }}
      >
        <i
          className="fa-solid fa-satellite-dish fa-fade"
          style={{ color: " #ffffff", fontSize: "3rem", marginRight: "1.2rem" }}
        ></i>
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          minWidth: "310px",
          maxWidth: "420px",
          padding: "1rem",
          fontSize:"1.05rem",
        }}
      >
        <label>Name</label>
        <input required style={{height:"1.5rem", padding:"0.8rem 0 0.8rem 0.2rem"}} type="text" name="from_name" placeholder="John" />
        <label  style={{ marginTop: "1rem" }} >Email</label>
        <input required style={{height:"1.5rem", padding:"0.8rem 0 0.8rem 0.2rem"}}placeholder="email@address.com" type="email" name="from_email" />
        <label style={{ marginTop: "1rem" }}>Message</label>
        <textarea required style={{ height: "5rem", padding:"0.2rem 0 0.8rem 0.2rem"}} placeholder="Type your message..." name="message" />
        <input
          style={{
            marginTop: "1rem",
            width: "80px",
            margin: "1rem auto",
            fontFamily: "Inter, sans-serif",
            backgroundColor: "white",
            padding: "0.2rem",
            cursor: "pointer",
            fontWeight:"600",
            borderRadius:"0.3rem",
            fontSize:"1.05rem"

          }}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactUs;
