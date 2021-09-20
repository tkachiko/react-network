import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <li className={styles.user}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.photos.small !== null ? user.photos.small : userPhoto}
          alt='user avatar'
          className={styles.userPhoto}
        />
      </NavLink>
      <div>{user.name}</div>
      <div>{user.status}</div>
      {user.followed ? (
        <button
          className={styles.button}
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            unfollow(user.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={styles.button}
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            follow(user.id);
          }}
        >
          Follow
        </button>
      )}
    </li>
  );
};

export default User;
