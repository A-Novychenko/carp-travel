"use client";

import {useState} from "react";

import {Navlinks} from "../NavLinks/Navlinks";

import styles from "./MobileMenu.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button className={styles.menu_btn} onClick={() => setIsOpen(true)}>
          Menu
        </button>
      ) : (
        <div className={styles.backdrop}>
          <div className={styles.content_box}>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <Navlinks />
          </div>
        </div>
      )}
    </>
  );
};
