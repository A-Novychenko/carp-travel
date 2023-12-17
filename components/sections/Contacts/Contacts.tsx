import {ContactForm} from "@/components/elements/ContactForm/ContactForm";
import Link from "next/link";

export const Contacts = () => (
  <section>
    <h2>CONTACT US</h2>
    <div>
      <ul>
        <li>
          <Link href="tel:+380981234567">+38 (098) 12 34 567</Link>
        </li>
        <li>
          <Link href="tel:+380731234567">+38 (073) 12 34 567</Link>
        </li>
      </ul>
      <p>Phone number</p>
    </div>

    <div>
      <p>support@carptravel.com</p>
      <p>E-mail</p>
    </div>

    <div>
      <ul>
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
      <p>Follow us</p>
    </div>

    <ContactForm />
  </section>
);
