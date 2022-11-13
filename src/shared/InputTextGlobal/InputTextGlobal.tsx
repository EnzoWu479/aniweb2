import { TextFieldProps } from "@mui/material";
import { InputTextFieldGlobal } from "./_inputtextglobal";

export default (props: TextFieldProps) => {
  return (
    <InputTextFieldGlobal
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      size="small"
      InputLabelProps={{
        style: { color: "#292f33" },
      }}
      {...props}
    />
  );
};
