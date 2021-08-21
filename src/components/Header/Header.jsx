import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import styles from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.loginBlock}>
        {isAuth ? (
          <div>
            {login} -{' '}
            <button onClick={logout} className={styles.button}>
              Sign out
            </button>{' '}
          </div>
        ) : (
          <NavLink to={'/login'}>Sign in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
