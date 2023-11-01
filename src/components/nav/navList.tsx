'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav.module.scss';

type Props = {
  styled?: string;
};

const NavList: FC<Props> = ({ styled }) => {
  const pathName = usePathname();
  const navLink = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Catalog' },
  ];

  return (
    <nav>
      <ul
        className={`${styled === 'light' ? classes.nav_light : ''} ${
          classes.nav
        }`}
      >
        {navLink.map((link) => (
          <li className={classes.nav__item} key={link.path}>
            <Link href={link.path}>
              <span
                className={
                  pathName === link.path
                    ? `${classes.nav__link} ${classes.nav__link_active}`
                    : classes.nav__link
                }
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
