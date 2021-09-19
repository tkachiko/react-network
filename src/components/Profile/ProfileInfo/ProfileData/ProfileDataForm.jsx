import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import TextInput from '../../../common/FormsControls/TextInput';
import { saveProfile } from './../../../../redux/profile-reducer';
import styles from './ProfileData.module.css';
import Checkbox from './../../../common/FormsControls/Checkbox';
import TextArea from './../../../common/FormsControls/TextArea';

const ProfileDataForm = ({
  profile,
  setEditMode,
  error,
  saveProfile,
  isSubmitting,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          fullName: profile.fullName,
          lookingForAJob: profile.lookingForAJob,
          lookingForAJobDescription: profile.lookingForAJobDescription,
          aboutMe: profile.aboutMe,
          contacts: {
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
          },
        }}
        onSubmit={(values, { setSubmitting }) => {
          saveProfile(values, setEditMode);
          setSubmitting(false);
        }}
      >
        <Form>
          {error && <div className={styles.formSummaryError}>{error}</div>}
          <div className={styles.inputBlockContainer}>
            <div className={styles.inputBlock}>
              <h6 className={styles.heading}>Full name:</h6>
              <TextInput type='text' name='fullName' placeholder='Full name' />
            </div>
            <div className={styles.inputBlock}>
              <h6 className={styles.heading}>Looking for a job&nbsp;</h6>
              <Checkbox name='lookingForAJob' />
            </div>
            <div className={styles.inputBlock}>
              <h6 className={styles.heading}>Description: </h6>
              <TextArea
                type='text'
                name='lookingForAJobDescription'
                placeholder='Tell about your professional skills and what kind of job you are looking for'
              />
            </div>
            <div className={styles.inputBlock}>
              <h6 className={styles.heading}>About me: </h6>
              <TextInput
                type='text'
                name='aboutMe'
                placeholder='Some info about you'
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.contactsForm}>
                {Object.keys(profile.contacts).map(key => {
                  return (
                    <div key={key} className={styles.contact}>
                      <h6 className={`${styles.heading} ${styles.headingForm}`}>
                        <div>{`${key}${':'}`}</div>
                      </h6>
                      <TextInput
                        type='text'
                        name={'contacts.' + key}
                        placeholder={key}
                        className={styles.contactsSocials}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.buttonSave}>
              <button type='submit' disabled={isSubmitting}>
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

const mapStateToProps = state => ({
  error: state.profilePage.error,
});

export default connect(mapStateToProps, { saveProfile })(ProfileDataForm);
