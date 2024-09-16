// pages/index.js
import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import RegisterForm from '@/components/RegisterSection';
import LoginSection from '@/components/LoginSection';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setIsLoading(true);
    router.push('/register');
  };

  return (
    <div className="headerContainer">
      <Header />
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          
          <LoginSection handleLoginClick={handleLoginClick} isLoading={isLoading} />

          <div className={styles.registerSection}>
            <h2>REALIZAR CADASTRO</h2>
            <p>Preencha com seus dados</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
