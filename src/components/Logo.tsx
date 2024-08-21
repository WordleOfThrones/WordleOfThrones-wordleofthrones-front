import Image from 'next/image';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={'/images/logo.png'} width={267} height={112} alt={'Logo'} />
    </div>
  );
}