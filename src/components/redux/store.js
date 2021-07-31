const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
  _callSubscriber() {
    console.log('State has been changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        const mewMessage = {
          id: 7,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(mewMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
