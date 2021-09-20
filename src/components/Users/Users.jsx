import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div className={styles.usersPage}>
      <ul className={styles.usersList}>
        {users.map(user => (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </ul>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};

export default Users;
