/* eslint-disable */

import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import CalculateAreaOfTriangle from "../features/calculate-area-of-triangle/view";
import CalculateHypotenuse from "../features/calculate-hypotenuse/view";
import IsTriangle from "../features/is-triangle/view";
import PageNotFound from "../features/page-not-found/view";
import TriangleQuiz from "../features/triangle-quiz/view";

function Navbar() {
  function renderNavigationBar() {
    return (
      <nav className="navigation">
        <div className="container-fluid">
          <div className="brand">
            <NavLink className="link" to="/">
              fun with triangles
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink className="link" to="/">
                is triangle?
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/quiz">
                quiz
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hypotenuse">
                hypotenuse
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/area-of-triangle">
                area
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  function loadRoutes() {
    return (
      <Routes>
        <Route path="/" exact element={<IsTriangle />} />
        <Route path="/is-triangle" exact element={<IsTriangle />} />
        <Route path="/quiz" element={<TriangleQuiz />} />
        <Route path="/hypotenuse" element={<CalculateHypotenuse />} />
        <Route path="/area-of-triangle" element={<CalculateAreaOfTriangle />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }

  return (
    <div>
      {renderNavigationBar()}
      {loadRoutes()}
    </div>
  );
}

export default Navbar;
