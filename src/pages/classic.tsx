import Header from '@/components/Header';
import useFetchCharacter from '@/hooks/useFetchCharacter';
import styles from '@/styles/Classic.module.css';

export default function Classic() {
  const {
    characterName,
    setCharacterName,
    characterData,
    errorMessage,
    handleSubmit,
  } = useFetchCharacter();

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit} className={styles.container}>
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

      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}

      {characterData && (
        <div className={styles.characterInfo}>
          <img 
            src={characterData.imagem} 
            alt={characterData.nome} 
            className={styles.characterImage} 
          />
          <div className={styles.characterDetails}>
            <div className={styles.characterDetailItem}><strong>Nome:</strong> {characterData.nome}</div>
            <div className={styles.characterDetailItem}><strong>Gênero:</strong> {characterData.genero}</div>
            <div className={styles.characterDetailItem}><strong>Título:</strong> {characterData.titulo}</div>
            <div className={styles.characterDetailItem}><strong>Espécie:</strong> {characterData.raca}</div>
            <div className={styles.characterDetailItem}><strong>Origem:</strong> {characterData.origem}</div>
            <div className={styles.characterDetailItem}><strong>Religião:</strong> {characterData.religiao}</div>
            <div className={styles.characterDetailItem}><strong>Série:</strong> {characterData.serie}</div>
            <div className={styles.characterDetailItem}><strong>Primeira Aparição:</strong> {characterData.primeiraAparicao}</div>
          </div>
        </div>
      )}
    </div>
  );
}
