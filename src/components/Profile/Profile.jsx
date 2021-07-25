import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main>
      <div>
        <img className={styles.coverImage} src='https://vistapointe.net/images/reindeer-9.jpg' alt='cover-image' />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
