import React from "react";
import ReactDOM from "react-dom/client";
import { getName } from "./mainService";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Forecast from "./components/forecast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <h1>Hello {getName()}</h1>
        <Forecast />
      </QueryClientProvider>
    </React.StrictMode>,
  )