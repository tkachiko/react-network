import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './DialogItem.module.css';

const DialogItem = ({ id, name, activeDialogId }) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      className={cn(styles.dialogLink, {
        [styles.active]: activeDialogId === id,
      })}
      activeClassName={styles.active}
    >
      <div className={styles.dialogItem}>{name}</div>
    </NavLink>
  );
};

export default DialogItem;
