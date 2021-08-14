import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
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
        <ProfileStatus status={props.profile.aboutMe} />
      </div>
    </div>
  );
};

export default ProfileInfo;
