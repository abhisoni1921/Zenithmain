import { forwardRef } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const MKInput = forwardRef(({ error, success, disabled, ...rest }, ref) => {
  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
      color: theme.palette.text.primary,
    },
    "& label.Mui-focused": {
      color: error ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: error ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: error ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.grey[300],
      },
      "&:hover fieldset": {
        borderColor: error ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: error ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
      },
    },
  }));

  return <StyledTextField {...rest} ref={ref} error={error} disabled={disabled} />;
});

export default MKInput;