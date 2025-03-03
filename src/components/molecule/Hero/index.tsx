import { Box, Typography } from "@mui/material";
import React from "react";
import Nebula from "../../../../public/nebula-background.mp4";
import Header from "../Header";
import Instagram from "../../../../public/instagram.png";
import Button from "../../atoms/Button";
type Props = {};

function Hero({}: Props) {
  return (
    <Box>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
        }}
      >
        <source src={Nebula} type="video/mp4" />
      </video>
      <Header />
      <Box mt={"66px"} position={"relative"} ml={"22px"}>
        <Typography variant="heroText" color="white">
          Digital Marketing
        </Typography>
        <br style={{ display: "contents" }} />
        <Typography variant="heroText" color="white" display={"flex"}>
          <img src={Instagram} />
          <span style={{ marginLeft: "32px" }}>That Makes you</span>
        </Typography>
        <br style={{ display: "contents" }} />
        <Typography variant="heroText" color="white">
          Money
        </Typography>
        <Box mt={"16px"}>
          <Typography variant="body1" color="white">
            No more wasted budgets. Get your job ads
          </Typography>
          <br style={{ display: "contents" }} />
          <Typography variant="body1" color="white">
            in front of the right people-at the right place,
          </Typography>
          <br style={{ display: "contents" }} />
          <Typography variant="body1" color="white">
            right time, and right price.
          </Typography>
        </Box>
        <Box mt={"32px"} display={"flex"} alignItems={"center"} gap={"16px"}>
          <Button buttonType="mediumContained" btnTextColor="black">
            Get a free trial
          </Button>
          <Button buttonType="medium" btnTextColor="white">
            Book a demo call
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
