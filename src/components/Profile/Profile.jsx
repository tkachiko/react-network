import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.content}>
      <div>
        <img className={styles.coverImage} src='https://vistapointe.net/images/reindeer-9.jpg' alt='cover-image' />
      </div>
      <div>avatar + description</div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div>
        posts
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </main>
  );
};

export default Profile;
