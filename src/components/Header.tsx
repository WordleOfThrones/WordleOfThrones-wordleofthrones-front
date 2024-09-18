import React from 'react';
import { useModalLogic } from '../hooks/useModalLogic';
import ConfigButton from './Header/Config';
import Logo from './Header/Logo';
import LoginButton from './Header/LoginButton';
import Modal from './Header/Modal';
import styles from '../styles/Header.module.css';

export default function Header() {
  const {
    isModalOpen,
    isColorBlindMode,
    toggleModal,
    handleLoginClick,
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
