import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  return (
    <main>
      <ProfileInfo
        profile={props.profile}
        aboutMe={props.aboutMe}
        fullName={props.fullName}
      />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
