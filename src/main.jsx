import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#cd7b35",
    secondary: "rgba(205, 123, 53, .85)",
    textPrimary: "rgba(78, 7, 7, 1)",
    bg: "rgb(27 50 48)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
