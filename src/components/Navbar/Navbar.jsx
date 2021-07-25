import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href='/profile' className={styles.link}>
            Profile
          </a>
        </li>
        <li className={styles.listItem}>
          <a href='/dialogs' className={styles.link}>
            Messages
          </a>
        </li>
        <li className={styles.listItem}>
          <a href='/news' className={styles.link}>
            News
          </a>
        </li>
        <li className={styles.listItem}>
          <a href='/music' className={styles.link}>
            Music
          </a>
        </li>
        <li className={styles.listItem}>
          <a href='/settings' className={styles.link}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
