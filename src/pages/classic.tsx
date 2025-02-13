import useFetchCharacter from '@/hooks/useFetchCharacter';
import styles from '@/styles/Classic.module.css';
import { useState, useEffect } from 'react';
import Logo from '../components/Header/Logo';
export default function Classic() {
  const {
    characterName,
    setCharacterName,
    characterData,
    errorMessage,
    handleSubmit,
  } = useFetchCharacter();

  const [characters, setCharacters] = useState<any[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  useEffect(() => {
    const fetchSelectedCharacter = async () => {
      try {
        const response = await fetch('https://thronesapi-1.onrender.com/api/characters/character/sorted-character?idModoJogo=1');
        if (!response.ok) {
          throw new Error('Falha ao buscar personagem sorteado');
        }
        const data = await response.json();
        setSelectedCharacter(data);
        console.log('Personagem sorteado:', data);
      } catch (error) {
        console.error('Erro ao buscar personagem sorteado:', error);
      }
    };
  
    fetchSelectedCharacter();
  }, []);

  useEffect(() => {
    if (characterData && characterData.imagem) {
      setCharacters((prevCharacters) => [characterData, ...prevCharacters]);
    }
  }, [characterData]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const getBoxStyle = (field: string, value: string) => {
    if (!selectedCharacter || !selectedCharacter[field]) return styles.box;
  
    return selectedCharacter[field] === value ? styles.boxGreen : styles.boxRed;
  };  

  return (
    <div className={styles.pageContainer}>
      <Logo />
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Digite o nome do personagem"
          className={styles.inputField}
        />
        <button type="submit" className={styles.button}>
          Buscar
        </button>
      </form>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      {characters.length > 0 && (
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            <div className={styles.column}>
              <div className={styles.columnLabel}>Personagem</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>
                  {character.imagem ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={character.imagem}
                      alt={character.nome || 'Personagem'}
                      className={styles.characterImage}
                    />
                  ) : (
                    <div className={styles.placeholder}>Sem Imagem</div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Gênero</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('genero', character.genero)}
                >
                  {character.genero}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Série</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('serie', character.serie)}
                >
                  {character.serie}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Casa</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('casa', character.casa)}
                >
                  {character.casa}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Raça</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('raca', character.raca)}
                >
                  {character.raca}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Título</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('titulo', character.titulo)}
                >
                  {character.titulo}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Origem</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('origem', character.origem)}
                >
                  {character.origem}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Religião</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle('religiao', character.religiao)}
                >
                  {character.religiao}
                </div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Primeira Aparição</div>
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={getBoxStyle(
                    'primeiraAparicao',
                    character.primeiraAparicao
                  )}
                >
                  {character.primeiraAparicao}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
