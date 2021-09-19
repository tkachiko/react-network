import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <>
      {!editMode && (
        <p className={styles.status} onDoubleClick={activateEditMode}>
          {props.status || '---------'}
        </p>
      )}
      {editMode && (
        <input
          className={styles.customInput}
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
        />
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
