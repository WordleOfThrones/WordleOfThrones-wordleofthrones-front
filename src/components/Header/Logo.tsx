import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/images/logo.png" alt="Logo" width={150} height={60} />
    </div>
  );
};