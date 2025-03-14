import { Suspense } from "react";
import { Router } from "./utils/router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <Router />
    </Suspense>
  </BrowserRouter>
);
