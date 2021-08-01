import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  const state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = text => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      mewMessage={state.dialogsPage.newMessageText}
      sendNewMessage={sendMessage}
      updateNewMessageText={onMessageChange}
    />
  );
};

export default DialogsContainer;
