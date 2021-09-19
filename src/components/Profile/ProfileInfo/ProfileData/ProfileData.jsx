import styles from './ProfileData.module.css';
import vk from './../../../../assets/images/contacts-icons/vk.png';
import facebook from './../../../../assets/images/contacts-icons/facebook.png';
import github from './../../../../assets/images/contacts-icons/github.png';
import instagram from './../../../../assets/images/contacts-icons/instagram.png';
import twitter from './../../../../assets/images/contacts-icons/twitter.png';
import website from './../../../../assets/images/contacts-icons/website.png';
import youtube from './../../../../assets/images/contacts-icons/youtube.png';
import mainLink from './../../../../assets/images/contacts-icons/website.png';

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  const contacts = Object.entries(profile.contacts).filter(
    ([name, address]) => [name, address],
  );

  const socials = {
    vk,
    github,
    instagram,
    facebook,
    twitter,
    website,
    youtube,
    mainLink,
  };

  return (
    <div className={styles.profileInfo}>
      <div className={`${styles.contacts}`}>
        {contacts.length > 0 && (
          <>
            {contacts.map(
              ([name, address]) =>
                address && (
                  <div key={name} className={styles.contacts__socials}>
                    <a target='_blank' rel='noreferrer' href={address}>
                      <img src={socials[name]} alt='social network icon' />
                    </a>
                  </div>
                ),
            )}
          </>
        )}
      </div>
      {isOwner && (
        <div className={`${styles.buttonEdit}`}>
          <button onClick={activateEditMode}>Edit profile</button>
        </div>
      )}
      <div className={styles.contactsBlock}>
        <div className={styles.contactsAboutBlock}>
          <h6 className={`${styles.contactsAbout} ${styles.heading}`}>
            About me:&nbsp;
          </h6>
          <p className={`${styles.contactsAboutInfo}`}>{profile.aboutMe}</p>
        </div>
        <div className={`${styles.contactsJobBlock}`}>
          {profile.lookingForAJob && (
            <div>
              <h6 className={`${styles.heading}`}>Looking for a job: </h6>
              <div className={styles.lookingForAJob}></div>
            </div>
          )}
        </div>
        {profile.lookingForAJob && (
          <div className={`${styles.contactsDescription}`}>
            <h6
              className={`${styles.heading} ${styles.contactsJobDescription}`}
            >
              Description:{' '}
            </h6>
            <p>{profile.lookingForAJobDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
