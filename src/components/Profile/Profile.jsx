import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts }) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </main>
  );
};

export default Profile;
