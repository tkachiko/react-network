import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
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
        <div key={user.id}>
          <div>
            <div>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt='user avatar'
                className={styles.userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
