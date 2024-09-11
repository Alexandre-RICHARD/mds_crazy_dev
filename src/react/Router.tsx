import React from "react";
import { Route, Routes } from "react-router-dom";

import { AccountAccess } from "./components/AccountAccess/AccountAccess";
import { ExploreProfile } from "./components/ExploreProfile/ExploreProfile";
import { Homepage } from "./components/Homepage/Homepage";
import { Premium } from "./components/Premium/Premium";
import { Profile } from "./components/Profile/Profile";

export const Router = (): React.JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      <Route
        path="/account"
        element={<AccountAccess />}
      />
      <Route
        path="/explore-profile"
        element={<ExploreProfile />}
      />
      <Route
        path="/upgrade-premium"
        element={<Premium />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
    </Routes>
  );
};
