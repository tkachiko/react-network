import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, addPost }) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} />
    </main>
  );
};

export default Profile;
