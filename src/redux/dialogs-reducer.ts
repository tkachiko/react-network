import { AuthorType, DialogType, MessageType } from '../types/types';

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const SET_ACTIVE_DIALOG = 'dialogs/SET_ACTIVE_DIALOG';

const initialState = {
  activeDialogId: null as number | null,
  authors: [
    { id: 0, name: 'Me' },
    { id: 1, name: 'Max' },
    { id: 2, name: 'Violetta' },
    { id: 3, name: 'Kate' },
    { id: 4, name: 'Ksenia' },
    { id: 5, name: 'Alex' },
  ] as Array<AuthorType>,
  dialogs: [
    { id: 1, name: 'Max', companions: [1] },
    { id: 2, name: 'Violetta', companions: [2] },
    { id: 3, name: 'Kate', companions: [3] },
    { id: 4, name: 'Ksenia', companions: [4] },
    { id: 5, name: 'Alex', companions: [5] },
  ] as Array<DialogType>,
  messages: [
    { id: 1, dialogId: 1, authorId: 1, message: 'Hi!' },
    { id: 2, dialogId: 1, authorId: 1, message: 'How are you doing?' },
    { id: 3, dialogId: 1, authorId: 0, message: "Hi! I'm doing great!" },
    {
      id: 4,
      dialogId: 2,
      authorId: 2,
      message:
        "Can you grab your ukulele with you for the weekend? I'd like to hear you playing :)",
    },
    {
      id: 5,
      dialogId: 2,
      authorId: 0,
      message: 'Haven\'t played it for ages, but sure, why not :)',
    },
    { id: 6, dialogId: 2, authorId: 2, message: 'Great!' },
    { id: 7, dialogId: 3, authorId: 0, message: 'Hi there!' },
    { id: 8, dialogId: 4, authorId: 4, message: 'Hi' },
    { id: 9, dialogId: 4, authorId: 4, message: 'Let\'s catch up tomorrow?' },
    { id: 10, dialogId: 4, authorId: 4, message: 'I have a great news ;)' },
    { id: 11, dialogId: 4, authorId: 0, message: 'Hey' },
    {
      id: 12,
      dialogId: 4,
      authorId: 0,
      message: 'Sure!',
    },
    {
      id: 13,
      dialogId: 4,
      authorId: 0,
      message: 'How about 6pm at my place?',
    },
    { id: 14, dialogId: 4, authorId: 4, message: 'Great!' },
    {
      id: 15,
      dialogId: 4,
      authorId: 4,
      message: 'See you tomorrow then',
    },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        id: state.messages.length + 1,
        ...action.payload,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage as MessageType],
      };
    }
    case SET_ACTIVE_DIALOG:
      return { ...state, activeDialogId: action.activeDialogId };
    default:
      return state;
  }
};

// action creators
type sendMessageActionType = {
  type: typeof SEND_MESSAGE;
  payload: { message: string; dialogId: number; authorId: number };
};
export const sendMessage = (
  message: string,
  dialogId: number,
): sendMessageActionType => ({
  type: SEND_MESSAGE,
  payload: { message, dialogId, authorId: 0 },
});

type SetActiveDialogActionType = {
  type: typeof SET_ACTIVE_DIALOG;
  activeDialogId: number;
};
export const setActiveDialog = (
  activeDialogId: number,
): SetActiveDialogActionType => ({ type: SET_ACTIVE_DIALOG, activeDialogId });

export default dialogsReducer;
