import { createTheme, responsiveFontSizes } from "@mui/material";
import { components, palette, typography } from "./";
import { esES } from '@mui/x-date-pickers/locales';


let theme = createTheme(
  {
    typography,
    palette,
    components,
  },
  esES
);

theme = responsiveFontSizes(theme);

export { theme };