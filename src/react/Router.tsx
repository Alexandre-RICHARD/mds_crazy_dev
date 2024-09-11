import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";

type RouterType = {
  path: string;
  element: React.JSX.Element;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
] as RouterType[]);
