import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import BubblesBg from "../Bubbles";
import theme from "../../../theme/theme";
import ParticleBackground from "../ParticleBg";

type Props = {};

function Title({}: Props) {
  return (
    <Box
      sx={{
        background: theme.palette.pageBg.main,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Typography
        variant="heading2"
        color="black"
        sx={{ textTransform: "capitalize", padding: "24px" }}
      >
        Programmatic advertising agency backed by AI
      </Typography>
      <Box
        sx={{
          // background: "black",
          width: "100%",
          display: "flex",
          zIndex: 1000,
          flexGrow: 1,
          position: "relative",
          padding: "24px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: theme.palette.pageBg.main,
          }}
        >
          <ParticleBackground />
        </Box>
        <Typography
          variant="heading3"
          color="black"
          zIndex={2000}
          marginTop={"64px"}
        >
          Why rely on human guesswork when
        </Typography>
        <br style={{ display: "contents" }} />
        <Typography variant="heading3" color="black" zIndex={2000}>
          our time-tested algorithms can
        </Typography>
        <br style={{ display: "contents" }} />
        <Typography variant="heading3" color="black" zIndex={2000}>
          spend your budget smarter?
        </Typography>
      </Box>
    </Box>
  );
}

export default Title;
