let rerenderEntireTree = () => {
  console.log('State has been changed');
};

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
      { id: 3, message: 'No way!' },
      { id: 4, message: "How's it going?" },
      { id: 5, message: 'Maybe later' },
      { id: 6, message: 'Woof!' },
    ],
    newMessageText: '',
  },
};

export const addPost = () => {
  const newPost = {
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

export const sendMessage = () => {
  const mewMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(mewMessage);
  updateNewMessageText('');
  rerenderEntireTree(state);
};

export const updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
