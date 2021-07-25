import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={styles.coverImage} src='https://vistapointe.net/images/reindeer-9.jpg' alt='cover-image' />
      </div>
      <div className={styles.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
