import styles from './ProfileData.module.css';

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts__item}>
      <a href={contactValue} target='_blank' rel="noreferrer">{contactTitle}
      <img src={contactTitle} alt="" />
      </a>
    </div>
  );
};

export default Contact;