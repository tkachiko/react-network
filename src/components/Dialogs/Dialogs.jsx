import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <DialogItem name='Emmett' id='1' />
          <DialogItem name='Marty' id='2' />
          <DialogItem name='Lorraine' id='3' />
          <DialogItem name='George' id='4' />
          <DialogItem name='Jennifer' id='5' />
          <DialogItem name='Einstein' id='6' />
        </div>
        <div className={styles.messages}>
          <Message message='Great Scott!' />
          <Message message='Nobody calls me chicken!' />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
