import Link from "next/link";
import React from "react";
import menudata from "./menu-data";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        {menudata.map((item) => (
          <li key={item.id} className={item.has_dropdown ? "has-dropdown" : ""}>
            <Link href={item.link}>{item.title}</Link>
            {item.has_dropdown && (
              <ul className="submenu">
                {item.sub_menus.map((sub, index) => (
                  <li key={index}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
