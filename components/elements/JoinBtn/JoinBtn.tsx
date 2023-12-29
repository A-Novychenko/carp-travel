'use client';

import { Button, scroller } from 'react-scroll';

import styles from './JoinBtn.module.scss';

export const JoinBtn = () => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      scroller.scrollTo('contacts', {
        spy: true,
        smooth: true,
        duration: 800,
      });
    }
  };

  return (
    <Button
      type="button"
      aria-label="Join Now"
      aria-describedby="contact-form"
      className={styles.btn}
      to="contacts"
      spy={true}
      smooth={true}
      duration={800}
      onKeyDown={e => {
        handleKeyDown(e);
      }}
    >
      JOIN NOW
    </Button>
  );
};
