import React from "react";
import {
  Button as MuiButton,
  ButtonProps,
  Typography,
  Box,
} from "@mui/material";
import FlipText from "../FlipText";

type Props = {
  buttonType: "header" | "medium" | "mediumContained";
  children: string;
  backgroundColor?: string;
  btnTextColor?: string;
} & ButtonProps;
function Button({
  buttonType,
  children,
  backgroundColor,
  btnTextColor,
  ...btnProps
}: Props) {
  let variant: "text" | "contained" | "outlined" = "contained";
  let typographyVariant: "headerButton" | "mediumButton" = "headerButton";
  let enableHoverAnimation: boolean = true;
  let disableRipple: boolean = false;
  let buttonTextColor: string = "";
  let bgColor: string = backgroundColor ? backgroundColor : "transparent";
  let border: string = "none";
  let paddingX: string | undefined;
  let paddingY: string | undefined;
  let borderRadius: string | undefined;
  if (buttonType == "header") {
    variant = "text";
    typographyVariant = "headerButton";
    enableHoverAnimation = false;
    disableRipple = true;
    buttonTextColor = "headerButton";
    bgColor = "transparent";
    paddingX = "0";
    paddingY = "0";
  } else if (buttonType == "medium") {
    variant = "outlined";
    bgColor = backgroundColor ? backgroundColor : "transparent";
    typographyVariant = "mediumButton";
    paddingX = "48px";
    paddingY = "20px";
    borderRadius = "12px";
    border = `1px solid ${btnTextColor}`;
  } else if (buttonType == "mediumContained") {
    variant = "contained";
    bgColor = backgroundColor ? backgroundColor : "white";
    typographyVariant = "mediumButton";
    paddingX = "48px";
    paddingY = "21px";
    borderRadius = "12px";
  }

  return (
    <MuiButton
      variant={variant}
      sx={{
        backgroundColor: bgColor,
        textTransform: "none",
        border: border,
        paddingX,
        paddingY,
        borderRadius,
        lineHeight: 1,
        "&:hover": {
          backgroundColor: bgColor,
        },
        "& .MuiTouchRipple-child": {
          backgroundColor: btnTextColor,
        },
        boxSizing: "border-box",
      }}
      disableRipple={true}
      disableTouchRipple={disableRipple}
      {...btnProps}
    >
      <Box
        sx={{
          "&:hover": {
            transform: "translateY(0)",
            transition:
              "transform .8s cubic-bezier(.77,0,.18,1),opacity .8s cubic-bezier(.77,0,.18,1)",
          },
        }}
      >
        {buttonType == "header" ? (
          <FlipText variant={typographyVariant} color="headerButton">
            {children}
          </FlipText>
        ) : (
          <Typography variant={typographyVariant} color={btnTextColor}>
            {children}
          </Typography>
        )}
      </Box>
    </MuiButton>
  );
}

export default Button;
