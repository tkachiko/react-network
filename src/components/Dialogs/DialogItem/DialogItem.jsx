import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = ({id, name}) => {
  return (
    <div className={styles.dialogItem}>
      <NavLink to={`/dialogs/${id}`} className={styles.dialogLink} activeClassName={styles.active}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
