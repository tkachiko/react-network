import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = props => {
  return (
    <div className={styles.dialogItem}>
      <NavLink to={`/dialogs/${props.id}`} className={styles.dialogLink} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
