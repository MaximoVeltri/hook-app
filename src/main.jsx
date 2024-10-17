import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { FetchApp } from "./components/FetchApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchApp />
  </StrictMode>
);
