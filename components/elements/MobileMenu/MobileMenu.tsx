'use client';

import { useState } from 'react';

import { Navlinks } from '../NavLinks/Navlinks';

import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
    document.body.classList.toggle('modal-open', false);
  };

  const handleCloseMenuOnBackdrop = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
      document.body.classList.toggle('modal-open', false);
    }
    return;
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    document.body.classList.toggle('modal-open', true);
  };

  return (
    <>
      {!isOpen ? (
        <button
          className={styles.menu_btn}
          onClick={handleOpenMenu}
          aria-expanded={isOpen}
        >
          Menu
        </button>
      ) : (
        <div className={styles.backdrop}>
          <div
            className={styles.content_box}
            onClick={handleCloseMenuOnBackdrop}
          >
            <div className="ui-container">
              <button
                className="block absolute top-[43px] right-[20px] text-14 tracking-[1.4px] uppercase"
                onClick={handleCloseMenu}
              >
                Close
              </button>
              <Navlinks
                handleCloseMenu={handleCloseMenu}
                handleCloseMenuOnBackdrop={handleCloseMenuOnBackdrop}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
