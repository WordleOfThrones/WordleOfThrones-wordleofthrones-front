import React from 'react';
import styles from '../styles/Login.module.css';

const LoginSection = ({ handleLoginClick, isLoading }: { handleLoginClick: any, isLoading: boolean }) => {
  return (
    <div className={styles.loginSection}>
      <p>Seja bem vindo ao</p>
      <h2>Wordle of Thrones</h2>
      <p>Para manter-se conectado, realize login com suas informações</p>
      <button className={styles.submitButton} onClick={handleLoginClick} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Entrar'}
      </button>
    </div>
  );
};

export default LoginSection;
