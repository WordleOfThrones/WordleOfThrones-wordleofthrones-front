// pages/login.js
import styles from '@/styles/RegisterPage.module.css';
import Header from '@/components/Header';
import { useNavigation } from '@/hooks/useNavigation';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  const { handleRegisterClick } = useNavigation();

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className={styles.RegisterPage}>
        <div className={styles.container}>
          <div className={styles.welcome}>
            <h2>Olá, Guerreiro(a)!</h2>
            <p>Informe seus dados e comece uma nova jornada conosco</p>
            <button className={styles.registerButton} onClick={handleRegisterClick}>
              CADASTRAR
            </button>
          </div>
          <LoginForm />
        </div>
      </div>

    </div>

    
  );
}
