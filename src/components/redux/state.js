const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi how are you?', likesCount: 7 },
      { id: 2, message: `It's my first post!`, likesCount: 15 },
    ],
  },
  DialogsPage: {
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
    ],
  },
};

export default state;
