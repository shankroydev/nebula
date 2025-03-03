import React from "react";
import * as motion from "motion/react-client";
import { FLIP_TEXT_DURATION, FLIP_TEXT_STAGGER } from "../../../constants";
import { Typography, TypographyProps } from "@mui/material";

type Props = { children: string } & TypographyProps;

function FlipText({ children, ...typogrpahyProps }: Props) {
  return (
    <motion.div
      initial={"initial"}
      whileHover={"hovered"}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div>
        {children.split("").map((c, i) => (
          <motion.span
            style={{ display: "inline-block" }}
            key={i}
            transition={{
              duration: FLIP_TEXT_DURATION,
              delay: FLIP_TEXT_STAGGER * i,
              ease: "easeInOut",
            }}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
          >
            {c == " " ? (
              <Typography {...typogrpahyProps}>&nbsp;</Typography>
            ) : (
              <Typography {...typogrpahyProps}>{c}</Typography>
            )}
          </motion.span>
        ))}
      </div>
      <div
        style={{
          inset: 0,
          position: "absolute",
        }}
      >
        {children.split("").map((c, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block" }}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: FLIP_TEXT_DURATION,
              delay: FLIP_TEXT_STAGGER * i,
              ease: "easeInOut",
            }}
          >
            {c == " " ? (
              <Typography {...typogrpahyProps}>&nbsp;</Typography>
            ) : (
              <Typography {...typogrpahyProps}>{c}</Typography>
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default FlipText;
