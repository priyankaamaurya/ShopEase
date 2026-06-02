import App from "./App.jsx";
import "./global.css"
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}