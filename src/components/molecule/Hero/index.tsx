import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useScroll, useTransform, motion, useMotionValueEvent } from "motion/react";

import Nebula from "../../../../public/nebula-background.mp4";
import Header from "../Header";
import Instagram from "../../../../public/instagram.png";
import Button from "../../atoms/Button";
type Props = {};

function Hero({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [opacity, setOpacity] = useState(0);

  const y = useParallax(scrollYProgress, 500);

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, distance]);
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setOpacity(latest/1.5)
  });


  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={{ visibility: "visible" }}
      style={{ y }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100vh"}
        padding={"24px"}
      >
        <Box
          sx={{
            opacity: opacity,
            bgcolor: "black",
            zIndex: 1000,
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            objectFit: "cover",
          }}
        ></Box>
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
        <Box
          position={"relative"}
          ml={"22px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          flexGrow={1}
        >
          <Box>
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
          </Box>

          <Box>
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
          <Box display={"flex"} alignItems={"center"} gap={"16px"}>
            <Button buttonType="mediumContained" btnTextColor="black">
              Get a free trial
            </Button>
            <Button buttonType="medium" btnTextColor="white">
              Book a demo call
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Hero;
