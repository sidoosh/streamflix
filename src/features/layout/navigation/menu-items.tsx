import React from "react";
import "./menu-items.css";
import { Routes } from "../../../config/routes";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Popular", href: Routes.popular },
  { text: "Trend", href: Routes.trend },
  { text: "Newest", href: Routes.newest },
  { text: "Top Rated", href: Routes.toprated },
];
function MenuItems(props: {
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item.text}>
          <Link to={item.href} onClick={props.handleClick}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuItems;
