import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

export const Menu: React.FC = React.memo(({}): JSX.Element => {
  return (
    <div className="d1">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/AllProducts"}>AllProducts</NavLink>
          </li>
          <li>
            <NavLink to={"/CreateProducts"}>Create Products</NavLink>
          </li>

          <li>
            <NavLink to={"/AllCategories"}>AllCategories</NavLink>
          </li>
          <li>
            <NavLink to={"/CreateCategory"}>Create Category</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});
