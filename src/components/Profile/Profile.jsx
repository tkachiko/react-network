import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </main>
  );
}; 

export default Profile;
