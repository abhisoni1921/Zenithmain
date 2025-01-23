import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MKBox = styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };

  // background value
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = gradients[bgColor]
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : white.main;
  } else if (bgColor === "transparent") {
    backgroundValue = "transparent";
  } else if (bgColor) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  }

  // color value
  let colorValue = color;

  if (colorValue) {
    colorValue = palette[colorValue] ? palette[colorValue].main : greyColors[colorValue];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (borderRadius) {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (shadow) {
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow) {
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});

export default MKBox;