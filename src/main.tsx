import React from "react";
import ReactDOM from "react-dom/client";
import { getName } from "./mainService";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <h1>Hello {getName()}</h1>
    </React.StrictMode>,
  )