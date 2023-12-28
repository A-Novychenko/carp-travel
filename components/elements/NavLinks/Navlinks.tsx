'use client';

import React from 'react';
import { Link, scroller } from 'react-scroll';

import links from '@/data/linkList.json';

export const Navlinks: React.FC<INavlinksProps> = ({
  handleCloseMenu,
  handleCloseMenuOnBackdrop,
}) => {
  return (
    <nav role="navigation" aria-label="Main">
      <ul
        className="flex flex-col gap-12 items-center md:flex-row md:gap-6 lg:gap-14"
        onClick={(e: React.MouseEvent) =>
          handleCloseMenuOnBackdrop ? handleCloseMenuOnBackdrop(e) : null
        }
      >
        {links &&
          links.map(({ name, to }, idx) => (
            <li key={idx}>
              <Link
                tabIndex={0}
                className="tracking-[1.8px] link-transition leading-normal md:text-14 md:tracking-[1.4px]
                cursor-pointer"
                to={to}
                spy={true}
                smooth={true}
                duration={800}
                onClick={() => {
                  handleCloseMenu ? handleCloseMenu() : null;
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleCloseMenu ? handleCloseMenu() : null;
                    scroller.scrollTo(to, {
                      spy: true,
                      smooth: true,
                      duration: 800,
                    });
                  }
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
