import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MKButton = styled(Button)(({ theme, ownerState }) => {
  const { palette, functions, borders } = theme;
  const { color, variant, size, circular, iconOnly } = ownerState;

  const { white, dark, text, transparent, gradients } = palette;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;
  const { borderRadius } = borders;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    // backgroundColor value when button is focused
    const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus;

    // boxShadow value
    const boxShadowValue = palette[color]
      ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
      : boxShadow([0, 0], [0, 3.2], dark.main, 0.5);

    return {
      background: backgroundValue,
      color: color === "white" ? dark.main : white.main,

      "&:hover": {
        backgroundColor: backgroundValue,
      },

      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        boxShadow: boxShadowValue,
      },

      "&:disabled": {
        backgroundColor: backgroundValue,
        color: white.main,
      },
    };
  };

  // styles for the button with variant="outlined"
  const outliedStyles = () => ({
    backgroundColor: transparent.main,
    color: palette[color] ? palette[color].main : white.main,
    borderColor: palette[color] ? palette[color].main : white.main,

    "&:hover": {
      backgroundColor: transparent.main,
      borderColor: palette[color] ? palette[color].focus : white.focus,
    },

    "&:focus:not(:hover)": {
      backgroundColor: transparent.main,
      borderColor: palette[color] ? palette[color].focus : white.focus,
    },
  });

  // styles for the button with variant="gradient"
  const gradientStyles = () => {
    // background value
    const backgroundValue =
      color === "white" || !gradients[color]
        ? white.main
        : linearGradient(gradients[color].main, gradients[color].state);

    // color value
    const colorValue = color === "white" ? dark.main : white.main;

    return {
      background: backgroundValue,
      color: colorValue,

      "&:focus:not(:hover)": {
        boxShadow: "none",
      },
    };
  };

  // styles for the button with variant="text"
  const textStyles = () => ({
    color: palette[color] ? palette[color].main : white.main,

    "&:hover": {
      backgroundColor: transparent.main,
      color: palette[color] ? palette[color].focus : white.focus,
    },
  });

  // styles for the button size
  const buttonSize = {
    small: pxToRem(32),
    medium: pxToRem(40),
    large: pxToRem(48),
  }[size];

  return {
    ...(variant === "contained" && containedStyles()),
    ...(variant === "outlined" && outliedStyles()),
    ...(variant === "gradient" && gradientStyles()),
    ...(variant === "text" && textStyles()),

    minHeight: buttonSize,
    borderRadius: circular ? buttonSize / 2 : borderRadius.md,
    padding: iconOnly ? `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}` : `${pxToRem(12)} ${pxToRem(24)}`,
  };
});

export default MKButton;