import links from "@/data/linkList.json";
import Link from "next/link";

export const Navlinks = () => (
  <ul>
    {links &&
      links.map(({name, href}, idx) => (
        <li key={idx}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
  </ul>
);
