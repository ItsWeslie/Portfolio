import { createRoot } from "react-dom/client";
import "./styles/theme-tokens.css";
import "./index.css";
import App from "./App.jsx";

// Apply the saved portfolio theme before the first paint, including the intro.
try {
  document.documentElement.dataset.theme = window.localStorage.getItem("sw-theme") || "dark";
} catch {
  document.documentElement.dataset.theme = "dark";
}

createRoot(document.getElementById("root")).render(<App />);
