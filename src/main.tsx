import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://businessco.frontegg.com",
  clientId: "e87fc505-bf7b-4110-919e-89376e5d27c1",
  appId: "2003c1bc-d39b-442d-a161-9beeb7095db0",
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);
