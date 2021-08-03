import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink to='/profile' className={styles.link} activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to='/dialogs' className={styles.link} activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to='/news' className={styles.link} activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to='/music' className={styles.link} activeClassName={styles.active}>
            Music
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to='/users' className={styles.link} activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to='/settings' className={styles.link} activeClassName={styles.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
