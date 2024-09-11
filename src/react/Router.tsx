import React from "react";
import { Route, Routes } from "react-router-dom";

import { ExploreProfile } from "./components/ExploreProfile/ExploreProfile";
import { Homepage } from "./components/Homepage/Homepage";
import { Premium } from "./components/Premium/Premium";

export const Router = (): React.JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      <Route
        path="/explore-profile"
        element={<ExploreProfile />}
      />
      <Route
        path="/upgrade-premium"
        element={<Premium />}
      />
    </Routes>
  );
};
