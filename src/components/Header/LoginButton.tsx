import React from 'react';
import styles from '../../styles/Header.module.css';
import { useNavigation } from '../../hooks/useNavigation';

export default function LoginButton() {
  const { navigateToLogin } = useNavigation();

  return (
    <div className={styles.loginButtonContainer}>
      <button className={styles.loginButton} onClick={navigateToLogin}>
        SEM PERFIL
      </button>
    </div>
  );
}
