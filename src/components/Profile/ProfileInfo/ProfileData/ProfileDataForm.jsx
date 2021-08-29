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
          <div>
            <button type='submit' disabled={isSubmitting}>
              save
            </button>
          </div>
          {error && <div className={styles.formSummaryError}>{error}</div>}
          <div>
            <b>Full Name:</b>
            <TextInput type='text' name='fullName' placeholder='Full Name' />
          </div>
          <div>
            <div>
              <b>Looking for a job: </b>
              <Checkbox name='lookingForAJob' />
            </div>
            <div>
              <b>My professional skills: </b>
              <TextArea
                type='text'
                name='lookingForAJobDescription'
                placeholder='My professional skills'
              />
            </div>
            <div>
              <b>About me: </b>
              <TextInput
                type='text'
                name='aboutMe'
                placeholder='Tell about yourself'
              />
            </div>
            <div>
              <b>Contacts:</b>
              {Object.keys(profile.contacts).map(key => {
                return (
                  <div key={key} className={styles.contact}>
                    <b>
                      {key}
                      <TextInput
                        type='text'
                        name={'contacts.' + key}
                        placeholder={key}
                      />
                    </b>
                  </div>
                );
              })}
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
