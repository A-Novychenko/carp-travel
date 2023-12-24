"use client";

import {Link, scroller} from "react-scroll";

import links from "@/data/linkList.json";

export const Navlinks = ({
  handleCloseMenu,
  handleCloseMenuOnBackdrop,
}: {
  handleCloseMenu: () => void;
  handleCloseMenuOnBackdrop: (e: React.MouseEvent) => void;
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
        onClick={handleCloseMenuOnBackdrop}
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
                  handleCloseMenu();
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
