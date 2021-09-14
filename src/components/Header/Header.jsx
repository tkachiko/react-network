import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo512.png';
import styles from './Header.module.css';
import logoutIcon from './../../assets/images/logout-icon.png';

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <NavLink to='/profile'>
          <img src={logo} className={styles.logo} alt='logo' />
          <h1 className={styles.headerHeading}>Network</h1>
        </NavLink>
      </div>
      <div className={styles.loginBlock}>
        {isAuth ? (
          <>
            <p>{login}</p>
            <button onClick={logout} className={styles.button}>
              <img src={logoutIcon} alt='log out' />
            </button>
          </>
        ) : (
          <NavLink to={'/login'}>Sign in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
