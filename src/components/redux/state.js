import { rerenderEntireTree } from '../../render';

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi how are you?', likesCount: 7 },
      { id: 2, message: `It's my first post!`, likesCount: 15 },
    ],
    newPostText: 'Wake the f**k up, Samurai! We have a city to burn.',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Emmett' },
      { id: 2, name: 'Marty' },
      { id: 3, name: 'Lorraine' },
      { id: 4, name: 'George' },
      { id: 5, name: 'Jennifer' },
      { id: 6, name: 'Einstein' },
    ],
    messages: [
      { id: 1, message: 'Great Scott!' },
      { id: 2, message: 'Nobody calls me chicken!' },
      { id: 2, message: 'No way!' },
      { id: 2, message: "How's it going?" },
      { id: 2, message: 'Maybe later' },
      { id: 2, message: 'Woof!' },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostText('');
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
