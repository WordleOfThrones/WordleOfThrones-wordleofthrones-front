import React from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h2>Ola, amigo!</h2>
          <p>Informe seus dados e comece uma nova jornada conosco</p>
          <button className={styles.registerButton}>Cadastrar</button>
        </div>
      </div>
      <div className={styles.loginSection}>
        <h2>Faca Login</h2>
        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Endereco de Email</label>
            <div className={styles.inputWithIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.icon}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              <input type="email" id="email" placeholder="Endereço de email" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Nome de Usuario</label>
            <div className={styles.inputWithIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
              <input type="text" id="username" placeholder="Nome de usuário" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <div className={styles.inputWithIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon}><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
              <input type="password" id="password" placeholder="Senha" />
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
