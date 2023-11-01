import { FC } from 'react';
import Link from 'next/link';

import classes from './logo.module.scss';

type Props = {
  styled?: string;
};

const Logo: FC<Props> = ({ styled }) => {
  return (
    <Link
      href='/'
      className={`${styled === 'light' ? classes.logo_light : ''} ${
        classes.logo
      }`}
    >
      Shop
    </Link>
  );
};

export default Logo;
