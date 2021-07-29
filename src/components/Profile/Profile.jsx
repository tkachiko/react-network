import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, addPost, newPostText, updateNewPostText }) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText} />
    </main>
  );
};

export default Profile;
