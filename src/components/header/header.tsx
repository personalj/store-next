import Logo from '@/components/logo/logo';
import classes from './header.module.scss';
import dynamic from 'next/dynamic';
const HeaderCart = dynamic(() => import('@/components/header/headerCart'), {
  ssr: false,
});

const Header = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <div className={classes.header__container}>
          <Logo />
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
