import Image from "next/image";
import styles from "../styles/Button.module.css";

export default function Button() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.text}>
            <p>Classico</p>
            <span>Cada rodada revela pistas sobre o charater</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className={styles.circle}>
          <div className={styles.logo}>
            <Image src="/images/targeryan.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.text}>
            <p>Descricao</p>
            <span>Adivinhe o personagem por sua descrição</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className={styles.circle}>
          <div className={styles.logo}>
            <Image src="/images/perg.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.text}>
            <p>Imagem</p>
            <span>Adivinhe o personagem por foto desfocada</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className={styles.circle}>
          <div className={styles.logo}>
            <Image src="/images/eye.png" alt="circle" width={50} height={35} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.text}>
            <p>Emoji</p>
            <span>Adivinhe personagens com base em emojis</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className={styles.circle}>
          <div className={styles.logo}>
            <Image src="/images/emoji.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}