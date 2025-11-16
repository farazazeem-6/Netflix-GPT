import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import App from "./App";

// Define all routes here
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ← App wraps all routes
    children: [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
