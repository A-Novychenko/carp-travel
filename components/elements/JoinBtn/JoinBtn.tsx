'use client';

import { Button, scroller } from 'react-scroll';

import styles from './JoinBtn.module.scss';

export const JoinBtn = () => (
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
      if (e.key === 'Enter') {
        scroller.scrollTo('contacts', {
          spy: true,
          smooth: true,
          duration: 800,
        });
      }
    }}
  >
    JOIN NOW
  </Button>
);
