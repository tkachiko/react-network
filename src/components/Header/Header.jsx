import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import styles from './Header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
