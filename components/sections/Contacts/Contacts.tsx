import {ContactForm} from "@/components/elements/ContactForm/ContactForm";
import Link from "next/link";

import styles from "./Contacts.module.scss";

export const Contacts = () => (
  <section id="contacts" className={`${"ui-section"} ${styles.section_bg}`}>
    <div className="ui-container">
      <h2 className="ui-title">
        CONTACT <span className="ui-title-accent">US</span>
      </h2>

      <div className={styles.wrap}>
        <ul>
          <li>
            <Link href="tel:+380981234567">+38 (098) 12 34 567</Link>
          </li>
          <li>
            <Link href="tel:+380731234567">+38 (073) 12 34 567</Link>
          </li>
        </ul>

        <p className={styles.contact_type}>Phone number</p>
      </div>

      <div className={styles.wrap}>
        <Link href="mailto:support@carptravel.com">support@carptravel.com</Link>
        <p className={styles.contact_type}>E-mail</p>
      </div>

      <div className={styles.follow_use_wrap}>
        <ul className="w-[81px]">
          <li>
            <Link href="https://www.facebook.com">facebook</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com">instagram</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com">youtube</Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/">tiktok</Link>
          </li>
        </ul>
        <p className={styles.follow_use}>Follow us</p>
      </div>
      <ContactForm />
    </div>
  </section>
);
