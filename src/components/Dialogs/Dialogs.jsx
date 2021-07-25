import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: 'Emmett' },
    { id: 2, name: 'Marty' },
    { id: 3, name: 'Lorraine' },
    { id: 4, name: 'George' },
    { id: 5, name: 'Jennifer' },
    { id: 6, name: 'Einstein' },
  ];

  let messagesData = [
    { id: 1, message: 'Great Scott!' },
    { id: 2, message: 'Nobody calls me chicken!' },
  ];

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
          <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        </div>
        <div className={styles.messages}>
          <Message message={messagesData[0].message} id={messagesData[0].id} />
          <Message message={messagesData[1].message} id={messagesData[1].id} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
