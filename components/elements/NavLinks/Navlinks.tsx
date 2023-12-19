import Link from "next/link";

import links from "@/data/linkList.json";

export const Navlinks = () => (
  <nav>
    <ul className="flex">
      {links &&
        links.map(({name, href}, idx) => (
          <li key={idx}>
            <Link href={href} className="m-10 p-1 text-sm">
              {name}
            </Link>
          </li>
        ))}
    </ul>
  </nav>
);
