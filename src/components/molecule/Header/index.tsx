import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Button from "../../atoms/Button";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "motion/react";

type Props = {};

function Header({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -500);
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, distance]);
  }

  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={{ visibility: "visible" }}
      style={{ y, zIndex: 10001 }}
    >
      <AppBar
        position="relative"
        sx={{
          boxSizing: "border-box",
          width: "calc(100% - 64px)",
          mt: "24px",
          mx: "32px",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: "15px",
            paddingX: "38px !important",
            m: "0 !important",
            maxWidth: "100% !important",
          }}
        >
          <Typography variant="logo" color="headerButton">
            Nebula
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"96px"}>
            <Button buttonType="header">Case Studies</Button>
            <Button buttonType="header">Career</Button>
            <Button buttonType="header">Contacts</Button>
          </Box>
        </Container>
      </AppBar>
    </motion.div>
  );
}

export default Header;
