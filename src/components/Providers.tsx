import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"
import { theme } from "../theme"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { es } from 'date-fns/locale'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es} >
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
