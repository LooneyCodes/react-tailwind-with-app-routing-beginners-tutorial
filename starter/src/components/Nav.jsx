import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import useBreakpoint from '../hooks/use-breakpoint';
import { MEDIA_QUERY_BREAKPOINTS } from '../constants';

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMatch = useBreakpoint(MEDIA_QUERY_BREAKPOINTS, 'sm');

  React.useEffect(() => {
    if (isMatch) {
      setIsOpen(false);
    }
  }, [isMatch]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {isMatch ? (
        <header className="w-full opacity-90 bg-black py-3">
          <nav>
            <ul className="flex justify-center items-center gap-x-16 [&>li]:text-secondary [&>li]:text-3xl [&>li]:text-center [&>li]:text-3xl [&>li]:font-display">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="our-work">
                  Our Work
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <>
          <div
            className={clsx(
              'transition-opacity fixed top-0 left-0 z-[9] w-full h-full bg-black opacity-[.22]',
              {
                'invisible opacity-0': !isOpen,
              },
            )}
            onClick={toggleMenu}
          />
          <div
            className={clsx(
              'transition-opacity max-w-sm rounded-2xl fixed bg-surface z-10 w-11/12 px-16 py-14 -translate-x-1/2 -translate-y-1/2 shadow-2xl top-1/2 left-1/2',
              { 'invisible opacity-0': !isOpen },
            )}
          >
            <nav>
              <ul className="flex flex-col justify-center items-center gap-y-16 [&>li]:text-secondary [&>li]:text-center [&>li]:text-3xl [&>li]:font-display">
                <li>
                  <Link className="hover:underline" to="/" reloadDocument>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/about-us" reloadDocument>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="our-work" reloadDocument>
                    Our Work
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className="absolute top-4 right-4 text-white" type="button" onClick={toggleMenu}>
            <RiMenuLine size={32} />
          </button>
        </>
      )}
    </>
  );
}

export default Nav;
