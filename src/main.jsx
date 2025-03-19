import { Router } from "./utils/router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./utils/context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </BrowserRouter>
);
