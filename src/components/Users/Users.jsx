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
  unfollow
}) => {
  return (
    <div className={styles.usersPage}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <ul className={styles.usersList}>
      {users.map(user => (
        <li className={styles.user}><User
          key={user.id}         
          user={user}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        /></li>
      ))}
      </ul>
    </div>
  );
};

export default Users;
