import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useRef, useState } from 'react';
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

  const fileInput = useRef(null);

  if (!profile) {
    return <Preloader />;
  }

  const onUpdatePhoto = e => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.photoContainer}>
          {isOwner ? (
            <button
              className={styles.customFileUpload}
              onClick={() => fileInput.current.click()}
            >
              <label className={styles.customLabel} htmlFor='file-upload'>
                <img
                  src={
                    profile.photos.large !== null
                      ? profile.photos.large
                      : userPhoto
                  }
                  className={styles.userPhoto}
                  alt='user avatar'
                />
                <span className={styles.uploadBtn}>Change photo</span>
              </label>
              <input
                type='file'
                name='file-upload'
                ref={fileInput}
                onChange={onUpdatePhoto}
              />
            </button>
          ) : (
            <img
              src={
                profile.photos.large !== null ? profile.photos.large : userPhoto
              }
              className={styles.userPhoto}
              alt='user avatar'
            />
          )}
        </div>
        <div className={styles.profileInfo}>
          <h5 className={styles.heading}>{profile.fullName}</h5>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
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
    </>
  );
};

export default ProfileInfo;
