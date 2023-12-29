'use client';

import { Button, scroller } from 'react-scroll';

import styles from './JoinBtn.module.scss';

const handleKeyDownToContact = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    scroller.scrollTo('contacts', {
      spy: true,
      smooth: true,
      duration: 800,
    });
  }
};

export const JoinBtn = () => {
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
        handleKeyDownToContact(e);
      }}
    >
      JOIN NOW
    </Button>
  );
};
