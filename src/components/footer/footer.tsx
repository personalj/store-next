import Logo from '@/components/logo/logo';
import NavList from '@/components/nav/navList';
import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.footer__container}`}>
        <Logo styled='light' />
        <NavList styled='light' />
      </div>
    </footer>
  );
};

export default Footer;
