import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAuthContextProvider>
);
