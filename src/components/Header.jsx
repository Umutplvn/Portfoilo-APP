import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typed from "react-typed";
import { Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          justifyContent: "space-between",
          color: "white",
          mt: "2rem",
          width: "100vw",
          padding: "1rem",
        }}
      >
        <Typography
          fontSize={"16px"}
          sx={{ fontFamily: "comics", fontWeight: "700" }}
        >
          <Typed
            strings={["I'm a developer"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
          <br />
        </Typography>

        <Button variant="outlined" color="inherit">Contact</Button>
      </Box>
    </Box>
  );
}
