import React from "react";
import ReactDOM from "react-dom/client";
import { getName } from "./mainService";
import Weather from "./components/weather";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <h1>Hello {getName()}</h1>
      <Weather />
    </React.StrictMode>,
  )