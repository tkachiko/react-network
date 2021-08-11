import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    mewMessage: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendNewMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

let withRedirect = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRedirect);

export default DialogsContainer;
