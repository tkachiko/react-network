const store = {
  _state: {
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
      newMessageText: 'Your message here',
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State has been changed');
  },

  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText('');
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  sendMessage() {
    const mewMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(mewMessage);
    this.updateNewMessageText('');
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
