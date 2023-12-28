"use client";
import React from "react";

import {Link} from "react-scroll";

import links from "@/data/linkList.json";

export const Navlinks: React.FC<INavlinksProps> = ({
  handleCloseMenu,
  handleCloseMenuOnBackdrop,
}) => {
  return (
    <nav>
      <ul
        className="flex flex-col gap-12 items-center md:flex-row md:gap-6 lg:gap-14"
        onClick={(e: React.MouseEvent) =>
          handleCloseMenuOnBackdrop ? handleCloseMenuOnBackdrop(e) : null
        }
      >
        {links &&
          links.map(({name, to}, idx) => (
            <li key={idx}>
              <Link
                className="tracking-[1.8px] link-transition leading-normal md:text-14 md:tracking-[1.4px]"
                to={to}
                spy={true}
                smooth={true}
                duration={800}
                onClick={() => {
                  handleCloseMenu ? handleCloseMenu() : null;
                }}
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
