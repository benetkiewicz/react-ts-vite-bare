import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./components/weather";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="1061746941306-8f9tlebrubavomue119464d65c2rt6d7.apps.googleusercontent.com">
    <React.StrictMode>
      <Weather />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
