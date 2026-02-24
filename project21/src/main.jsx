import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ScrollTopAndBottom from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollTopAndBottom />
  </StrictMode>
);
