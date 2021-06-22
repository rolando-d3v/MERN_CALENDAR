import React from "react";
import * as BiIcons from "react-icons/bi";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <strong>Rolando </strong>
        <button type="button"  className={styles.btn_exit}  >
          <BiIcons.BiExit />
          <span>Salir</span>{" "}
        </button>
      </nav>
    </header>
  );
}
