import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersPage}>
      <div className={styles.pages}>
        {pages.map(page => {
          return (
            <span
              className={`${styles.page} ${
                props.currentPage === page && styles.selectedPage
              }`}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id} className={styles.user}>
          <div>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
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
                  disabled={props.followingInProgress.some(
                    id => id === user.id,
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={styles.button}
                  disabled={props.followingInProgress.some(
                    id => id === user.id,
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
