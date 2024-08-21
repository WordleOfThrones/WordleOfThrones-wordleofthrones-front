import styles from '../styles/Text.module.css';

export default function Text() {
  return (
    <div className={styles.text}>
      <p>Adivinhe diariamente um personagem <br /> de 
      <span className={styles.titleOne}>Game Of Thrones</span> ou 
      <span className={styles.titleTwo}>House Of The Dragon</span></p>
    </div>
  );
}