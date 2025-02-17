import { useRouter } from 'next/router';

export const useNavigation = () => {
  const router = useRouter();

  const navigateToLogin = (): void => {
    router.push('/login');
  };

  const navigateToRegister = (): void => {
    router.push('/register');
  }

  const handleLoginClick = () => {
    router.push('/register');
  };

  const handleRegisterClick = () => {
    router.push('/login');
  };

  return {
    navigateToLogin,
    handleLoginClick,
    handleRegisterClick,
    navigateToRegister
  };
};
