import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(<App />);
