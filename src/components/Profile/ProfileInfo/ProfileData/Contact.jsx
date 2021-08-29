import styles from './ProfileData.module.css';

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li className={styles.contacts__item}>
      <h5>{contactTitle}: </h5>
      <span>{contactValue}</span>
    </li>
  );
};

export default Contact;