import { createBrowserRouter } from "react-router";
import Home from "./Home";
import FAQ from "./pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
]);
