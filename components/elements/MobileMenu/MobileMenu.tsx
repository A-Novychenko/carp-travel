"use client";

import {useState} from "react";

import styles from "./MobileMenu.module.scss";
import {Navlinks} from "../NavLinks/Navlinks";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className={styles.backdrop}>
          <div className={styles.content_box}>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <Navlinks />
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>Menu</button>
      )}
    </>
  );
};
