import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 
import styles from '../../styles/Header.module.css';

export default function Logo() {
  const router = useRouter(); 
  
  const handleClick = () => {
    router.push('/'); 
  };

  return (
    <div 
      className={styles.logo} 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }} 
    >
      <Image src="/images/logo.png" alt="Logo" width={150} height={60} />
    </div>
  );
}