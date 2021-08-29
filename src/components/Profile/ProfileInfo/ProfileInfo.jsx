import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updatePhoto,
  error,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onUpdatePhoto = e => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };

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

        {editMode ? (
          <ProfileDataForm
          profile={profile}
          error={error}
          setEditMode={setEditMode}
          />
          ) : (
            <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={() => {
              setEditMode(true);
            }}
            />
            )}
      </div>
    </div>
  );
};

export default ProfileInfo;
