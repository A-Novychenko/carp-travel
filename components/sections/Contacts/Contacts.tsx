import Link from 'next/link';

import { ContactForm } from '@/components/elements/ContactForm/ContactForm';

import styles from './Contacts.module.scss';

export const Contacts = () => (
  <section id="contacts" className={`${'ui-section'} ${styles.section_bg}`}>
    <div className="ui-container">
      <div className="lg:p-6">
        <h2 className="ui-title md:mb-9 lg:mb-[72px]">
          CONTACT <span className="ui-title-accent">US</span>
        </h2>

        <div className="lg:flex lg:gap-x-5">
          <div className="md:flex md:mb-16 lg:w-[606px] lg:flex-col lg:mb-0">
            <div className="md:mr-[90px] md:ml-[34px] lg:m-0 lg:mb-[121px]">
              <div className={styles.wrap}>
                <ul aria-label="Phone numbers">
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
              <ul
                className="w-[81px] lg:w-[293px]"
                aria-label="Social media links"
              >
                <li>
                  <Link
                    href="https://www.facebook.com"
                    className="link-transition"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    className="link-transition"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com"
                    className="link-transition"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/"
                    className="link-transition"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    tiktok
                  </Link>
                </li>
              </ul>
              <p className={styles.follow_use}>Follow us</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);
