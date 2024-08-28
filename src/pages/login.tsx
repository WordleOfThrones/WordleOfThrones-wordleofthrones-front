import React from 'react';
import Form from '../components/Form';
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
          <Form 
            label="email"
            title="E-mail ou usuario"
            viewBox="0 0 512 512"
            path="M256 0C114.61 0 0 114.61 0 256s114.61 256 256 256s256-114.61 256-256S397.39 0 256 0zM256 480c-123.71 0-224-100.29-224-224S132.29 32 256 32s224 100.29 224 224S379.71 480 256 480zM256 160c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S273.67 160 256 160zM256 320c-35.35 0-64-28.65-64-64s28.65-64 64-64s64 28.65 64 64S291.65 320 256 320z"
            type="email"
            id="email"
            placeholder="Endereço de Email ou Nome de usuário"
          />

          <Form 
            label="password"
            title="Senha"
            viewBox="0 0 448 512"
            path="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"
            type="password"
            id="password"
            placeholder="Senha"
          />
          <button type="submit" className={styles.loginButton}>Entrar</button>

        </form>
      </div>
    </div>
  );
}
