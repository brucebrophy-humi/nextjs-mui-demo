import "@/styles/globals.css";
import { Button, CssBaseline, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useMemo, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

const ThemeToggle = ({ theme, setColorMode }) => {
  return (
    <Container style={{ marginTop: "16px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {/* Light Mode Button */}
            {theme.palette.mode === "light" && (
              <Button variant="outlined" onClick={() => setColorMode("dark")}>
                <DarkMode /> Toggle Dark Mode
              </Button>
            )}
            {/* Dark Mode Button */}
            {theme.palette.mode === "dark" && (
              <Button variant="outlined" onClick={() => setColorMode("light")}>
                <LightMode /> Toggle Light Mode
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function App({ Component, pageProps }) {
  const [colorMode, setColorMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <ThemeToggle theme={theme} setColorMode={setColorMode} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
