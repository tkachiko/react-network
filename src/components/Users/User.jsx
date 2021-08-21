import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={styles.usersPage}>
      <div>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt='user avatar'
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default User;
