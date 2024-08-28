import styles from '../styles/Text.module.css';

export default function Text({text, textOne, textTwo, textThree}: TextProps) {
  return (
    <div className={styles.text}>
      <p>{text} <br />
        <span className={styles.titleOne}>{textOne}</span>
        <span className={styles.titleThree}>{textThree}</span>
        <span className={styles.titleTwo}>{textTwo}</span>
      </p>
    </div>
  );
}