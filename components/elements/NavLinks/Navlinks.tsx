"use client";

import {Link, scroller} from "react-scroll";

import links from "@/data/linkList.json";
import React from "react";

export const Navlinks: React.FC<INavlinksProps> = ({
  handleCloseMenu,
  handleCloseMenuOnBackdrop,
}) => {
  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 100,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav>
      <ul
        className="flex flex-col gap-12 items-center"
        onClick={(e: React.MouseEvent) =>
          handleCloseMenuOnBackdrop ? handleCloseMenuOnBackdrop(e) : null
        }
      >
        {links &&
          links.map(({name, to}, idx) => (
            <li key={idx}>
              <Link
                className="text-18 font-normal tracking-[1.8px]"
                to={to}
                spy={true}
                smooth={true}
                duration={800}
                onClick={() => {
                  handleCloseMenu ? handleCloseMenu() : null;
                  scrollTo();
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
