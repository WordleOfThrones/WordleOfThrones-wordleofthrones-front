import { useState } from 'react';
import { useRouter } from 'next/router';

export const useModalLogic = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isColorBlindMode, setIsColorBlindMode] = useState<boolean>(false);
  const router = useRouter();

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoginClick = (): void => {
    router.push('/login');
  };

  const toggleColorBlindMode = (): void => {
    setIsColorBlindMode(!isColorBlindMode);
    if (!isColorBlindMode) {
      document.body.classList.add('color-blind-mode');
    } else {
      document.body.classList.remove('color-blind-mode');
    }
  };

  return {
    isModalOpen,
    isColorBlindMode,
    toggleModal,
    handleLoginClick,
    toggleColorBlindMode,
  };
};
