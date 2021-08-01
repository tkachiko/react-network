const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
}

const dialogsResucer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const mewMessage = {
        id: 7,
        message: state.newMessageText,
      };
      state.messages.push(mewMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsResucer;
