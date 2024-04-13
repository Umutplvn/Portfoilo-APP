import React from "react";
import "./Contact.css";
import { Grid } from "@mui/material";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <Grid id="contact" container sx={{ width: "100vw", height: "100vh" }}>
      <Grid
      
        item
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        md={6}
      >
        <div style={{ display: { xs: "none", color:"black" } }} id="world">
          Contact
        </div>
      </Grid>

      <ContactUs />
    </Grid>
  );
};

export default Contact;
