import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large !== null ? profile.photos.large : userPhoto}
          alt='user avatar'
          className={styles.userPhoto}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
