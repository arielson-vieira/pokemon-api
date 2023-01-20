import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { AuthProvider } from "./Services/Providers/auth.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
