import React from 'react';
import styles from '../../styles/Header.module.css';

export default function Modal({isModalOpen, toggleModal, isColorBlindMode, toggleColorBlindMode}: ModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={toggleModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Ajuste geral</h2>
        <div className={styles.modalContent}>
          <label htmlFor="languageSelect">Idioma:</label>
          <select id="languageSelect" className={styles.select}>
            <option value="pt-br">Português (BR)</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <div className={styles.toggleContainer}>
            <span>Modo daltônico</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={isColorBlindMode}
                onChange={toggleColorBlindMode}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
        <button className={styles.closeButton} onClick={toggleModal}>
          Fechar
        </button>
      </div>
    </div>
  );
};
