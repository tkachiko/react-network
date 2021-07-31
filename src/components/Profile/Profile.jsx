import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({posts, newPostText, dispatch}) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </main>
  );
};

export default Profile;
