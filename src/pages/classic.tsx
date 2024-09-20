import useFetchCharacter from '@/hooks/useFetchCharacter';
import styles from '@/styles/Classic.module.css';
import { useState, useEffect } from 'react';

export default function Classic() {
  const {
    characterName,
    setCharacterName,
    characterData,
    errorMessage,
    handleSubmit,
  } = useFetchCharacter();
  
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    if (characterData && characterData.imagem) {
      setCharacters((prevCharacters) => [characterData, ...prevCharacters]);
    }
  }, [characterData]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e); 
  };

  return (
    <div className={styles.pageContainer}>
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
                    <img
                      src={character.imagem}
                      alt={character.fullName || character.name || 'Personagem'}
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
                <div key={index} className={styles.box}>{character.genero}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Série</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.serie}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Casa</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.casa}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Raça</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.raca}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Título</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.titulo}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Origem</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.origem}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Religião</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.religiao}</div>
              ))}
            </div>

            <div className={styles.column}>
              <div className={styles.columnLabel}>Primeira Aparição</div>
              {characters.map((character, index) => (
                <div key={index} className={styles.box}>{character.primeiraAparicao}</div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
