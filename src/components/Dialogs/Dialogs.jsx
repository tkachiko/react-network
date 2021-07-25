import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = props => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/1' className={styles.dialogLink} activeClassName={styles.active}>
              Emmett
            </NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/2' className={styles.dialogLink} activeClassName={styles.active}>
              Marty
            </NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/3' className={styles.dialogLink} activeClassName={styles.active}>
              Lorraine
            </NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/4' className={styles.dialogLink} activeClassName={styles.active}>
              George
            </NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/5' className={styles.dialogLink} activeClassName={styles.active}>
              Jennifer
            </NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to='/dialogs/6' className={styles.dialogLink} activeClassName={styles.active}>
              Einstein
            </NavLink>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Great Scott!</div>
          <div className={styles.message}>Nobody calls me chicken!</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
