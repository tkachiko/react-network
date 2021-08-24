import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, updatePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onUpdatePhoto = (e) => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
 }
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large !== null ? profile.photos.large : userPhoto}
          className={styles.userPhoto}
          alt='user avatar'
        />
        {isOwner && <input type='file' onChange={onUpdatePhoto} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
