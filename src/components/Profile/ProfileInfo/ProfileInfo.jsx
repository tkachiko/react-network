import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={styles.coverImage}
          src='https://vistapointe.net/images/reindeer-9.jpg'
          alt='cover-image'
        />
      </div>
      <div className={styles.descriptionBlock}>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userPhoto
          }
          alt='user avatar'
          className={styles.userPhoto}
        />
        <div className={styles.userName}>{props.profile.fullName}</div>
        <div className={styles.userInfo}>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
