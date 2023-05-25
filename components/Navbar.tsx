import React from "react";

import styles from "./NavbarStyles.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        {menuItems.map(({text, href}) => (
          <ActiveLink text={text} href={href} key={text} />
        ))}
      </nav>
    </div>
  );
};
