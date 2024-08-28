import React from 'react';
import styles from '../../styles/Header.module.css';

export default function LoginButton({handleLoginClick}: LoginProps) {
  return (
    <div className={styles.loginButtonContainer}>
      <button className={styles.loginButton} onClick={handleLoginClick}>ENTRAR</button>
    </div>
  );
};
