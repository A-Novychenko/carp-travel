import {ContactForm} from "@/components/elements/ContactForm/ContactForm";
import Link from "next/link";

import styles from "./Contacts.module.scss";

export const Contacts = () => (
  <section id="contacts" className={`${"ui-section"} ${styles.section_bg}`}>
    <div className="ui-container">
      <h2 className="ui-title md:pb-9">
        CONTACT <span className="ui-title-accent">US</span>
      </h2>

      <div className="md:flex md:pb-16">
        <div className="md:mr-[90px] md:ml-[34px]">
          <div className={styles.wrap}>
            <ul>
              <li>
                <Link href="tel:+380981234567" className="link-transition">
                  +38 (098) 12 34 567
                </Link>
              </li>
              <li>
                <Link href="tel:+380731234567" className="link-transition">
                  +38 (073) 12 34 567
                </Link>
              </li>
            </ul>

            <p className={styles.contact_type}>Phone number</p>
          </div>

          <div className={styles.wrap}>
            <Link
              href="mailto:support@carptravel.com"
              className="link-transition"
            >
              support@carptravel.com
            </Link>
            <p className={styles.contact_type}>E-mail</p>
          </div>
        </div>

        <div className={styles.follow_use_wrap}>
          <ul className="w-[81px]">
            <li>
              <Link href="https://www.facebook.com" className="link-transition">
                facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                className="link-transition"
              >
                instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" className="link-transition">
                youtube
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/" className="link-transition">
                tiktok
              </Link>
            </li>
          </ul>
          <p className={styles.follow_use}>Follow us</p>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
);
