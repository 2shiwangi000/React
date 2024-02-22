import "./styles.css";
import * as React from "react";
import { CssBaseline } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Mode from "./Mode";
import { lime, purple, cyan, red, green } from "@mui/material/colors";

export default function App() {
  const [mode, setMode] = React.useState(false);
  const [themecolor, setThemeColor] = React.useState("purple");
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      purple: {
        main: purple[200],
        light: purple[500],
        dark: purple[700]
      },
      red: {
        main: red[200],
        light: red[500],
        dark: red[700]
      },
      lime: {
        main: lime[200],
        light: lime[500],
        dark: lime[700]
      },
      cyan: {
        main: cyan[200],
        light: cyan[500],
        dark: cyan[700]
      },
      green: {
        main: green[200],
        light: green[500],
        dark: green[700]
      }
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Mode
          setMode={setMode}
          mode={mode}
          usetheme={useTheme}
          themecolor={themecolor}
          setThemeColor={setThemeColor}
        />
      </div>
    </ThemeProvider>
  );
}
