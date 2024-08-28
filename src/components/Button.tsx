import Image from "next/image";
import styles from "../styles/Button.module.css";

export default function Button({ title, info, iconsrc }: ButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.text}>
            <p>{title}</p>
            <span>{info}</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className={styles.circle}>
          <div className={styles.logo}>
            <Image src={iconsrc} alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
