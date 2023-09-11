import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import imgBg from "../assets/wallpaperflare.com_wallpaper.jpg";
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
        fontFamily: "Silkscreen, cursive",
        margin: "auto",
        width:"400px"
      }}
    >
      <h3
        style={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <i
          className="fa-solid fa-satellite-dish fa-fade"
          style={{ color: " #ffffff", fontSize: "3rem", marginRight: "1rem" }}
        ></i>
        Contact Me
      </h3>
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
        }}
      >
        <label>Name</label>
        <input required style={{height:"1.5rem", padding:"0.5rem"}} type="text" name="from_name" />
        <label  style={{ marginTop: "1rem" }}>Email</label>
        <input required style={{height:"1.5rem", padding:"0.5rem"}} type="email" name="from_email" />
        <label style={{ marginTop: "1rem" }}>Message</label>
        <textarea required style={{ height: "5rem", padding:"0.5rem" }} name="message" />
        <input
          style={{
            marginTop: "1rem",
            width: "60px",
            margin: "1rem auto",
            fontFamily: "Silkscreen, cursive",
            backgroundColor: "white",
            padding: "0.2rem",
            cursor: "pointer",
          }}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactUs;
