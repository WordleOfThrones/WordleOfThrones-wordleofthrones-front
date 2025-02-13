import React from 'react';
import { useModalLogic } from '@/hooks/useModalLogic';
import ConfigButton from '@/components/Header/Config';
import Logo from '@/components/Header/Logo';
import LoginButton from '@/components/Header/LoginButton';
import Modal from '@/components/Header/Modal';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const {
    isModalOpen,
    isColorBlindMode,
    toggleModal,
    toggleColorBlindMode,
  } = useModalLogic();

  return (
    <header className={styles.header}>
      <ConfigButton toggleModal={toggleModal} />
      <Logo />
      <LoginButton />
      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        isColorBlindMode={isColorBlindMode}
        toggleColorBlindMode={toggleColorBlindMode}
      />
    </header>
  );
};
