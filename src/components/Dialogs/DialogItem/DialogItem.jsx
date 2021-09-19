import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = ({id, name}) => {
  return (
    <>
      <NavLink to={`/dialogs/${id}`} className={styles.dialogLink} activeClassName={styles.active}>
        <div className={styles.dialogItem}>{name}</div>
      </NavLink>
    </>
  );
};

export default DialogItem;
