import styles from './ProfileData.module.css';
import Contact from './Contact';

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div className={styles.ProfileInfo}>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>edit</button>
        </div>
      )}
      <h5 className={styles.heading}>Full name: </h5>
      {profile.fullName}
      <ul>
        <li>
          <h5 className={styles.heading}>Looking for a job: </h5>
          {profile.lookingForAJob ? 'yes' : 'no'}
        </li>
        {profile.lookingForAJob && (
          <li>
            <h5 className={styles.heading}>My professional skills: </h5>
            {profile.lookingForAJobDescription}
          </li>
        )}
        <li>
          <h5 className={styles.heading}>About me: </h5>
          {profile.aboutMe}
        </li>
        <ul>
          <h5>Contacts:</h5>
          {Object.keys(profile.contacts).map(key => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default ProfileData;
