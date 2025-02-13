import useFetchCharacter from '@/hooks/useFetchCharacter';
import styles from '@/styles/ImageMode.module.css';
import { useState, useEffect } from 'react';
import Logo from '../components/Header/Logo';

interface WrongGuess {
  nome: string;
  imagem: string;
}

export default function ImageMode() {
  const {
    characterName,
    setCharacterName,
    characterData,
    errorMessage,
    handleSubmit,
  } = useFetchCharacter();
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [blurLevel, setBlurLevel] = useState(10);
  const [message, setMessage] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState<WrongGuess[]>([]);

  // Buscar personagem sorteado ao carregar a página
  useEffect(() => {
    const fetchSelectedCharacter = async () => {
      try {
        const response = await fetch(
          'https://thronesapi-1.onrender.com/api/characters/character/sorted-character?idModoJogo=1'
        );
        if (!response.ok) {
          throw new Error('Erro ao buscar personagem sorteado');
        }
        const data = await response.json();
        setSelectedCharacter(data);
      } catch (error) {
        console.error('Erro ao buscar personagem sorteado:', error);
      }
    };
    fetchSelectedCharacter();
  }, []);

  // Lógica de busca e verificação
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (characterData && selectedCharacter) {
      if (characterData.nome.toLowerCase() === selectedCharacter.nome.toLowerCase()) {
        setMessage('Parabéns! Você acertou!');
        setBlurLevel(0);
      } else {
        // Adiciona o personagem errado à lista de tentativas incorretas
        setWrongGuesses((prev) => [
          ...prev,
          { nome: characterData.nome, imagem: characterData.imagem || '' },
        ]);
        setBlurLevel((prev) => Math.max(prev - 2, 0));
        setMessage('Errou! Tente novamente.');
      }
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Logo />
      <h2>Adivinhe o Personagem!</h2>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Digite o nome do personagem"
          className={styles.inputField}
        />
        <button type="submit" className={styles.button}>
          Chutar
        </button>
      </form>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {selectedCharacter && (
        <>
          <div className={styles.imageContainer}>
            <img
              src={selectedCharacter.imagem}
              alt={selectedCharacter.nome}
              style={{ filter: `blur(${blurLevel}px)` }}
              className={styles.characterImage}
            />
          </div>
          <p className={styles.message}>{message}</p>
        </>
      )}
      {/* Exibe as tentativas incorretas */}
      {wrongGuesses.length > 0 && (
        <div className={styles.wrongGuessesContainer}>
          <div className={styles.guessesGrid}>
            {wrongGuesses.map((guess, index) => (
              <div key={index} className={styles.wrongGuess}>
                <img src={guess.imagem} alt={guess.nome} className={styles.wrongGuessImage} />
                <p>{guess.nome}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}