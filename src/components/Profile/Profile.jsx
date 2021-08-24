import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profile, status, updateStatus, isOwner, updatePhoto}) => {
  return (
    <main>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        updatePhoto={updatePhoto}
      />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
