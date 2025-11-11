import React, { Fragment } from "react";
import "../src/App.css";
import { createBrowserRouter } from "react-router";
import Login from "./components/Login";
import { RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={appRouter} />
    </Fragment>
  );
}
export default App;
