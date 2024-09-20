import { useState } from 'react';
import { useUpload } from '@/hooks/useUpload';
import styles from '@/styles/CharacterForm.module.css';

export default function CharacterForm() {
  const [image, setImage] = useState<File | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [description, setDescription] = useState('');
  const [house, setHouse] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState('');
  const [religion, setReligion] = useState('');
  const [series, setSeries] = useState('');
  const [firstAppearance, setFirstAppearance] = useState('');

  const { progress, handleUpload } = useUpload();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({
      characterName,
      description,
      house,
      gender,
      race,
      title,
      origin,
      religion,
      series,
      firstAppearance,
    });
    
    handleUpload(image, {
      name: characterName,
      description,
      house,
      gender,
      race,
      title,
      origin,
      religion,
      series,
      firstAppearance,
    });
  };  

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Cadastrar Personagem</h1>

        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Escolher Imagem</label>
              <div className={styles.formFileInputWrapper}>
                <input 
                  type="file" 
                  className={styles.formFileInput} 
                  onChange={handleImageChange} 
                />
                <button className={styles.customFileButton} type="button">Escolher Ficheiro</button>
              </div>
              {image && <p className={styles.fileName}>{image.name}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nome do Personagem</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Nome" 
                value={characterName} 
                onChange={(e) => setCharacterName(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Casa</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Casa" 
                value={house} 
                onChange={(e) => setHouse(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Gênero</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Gênero" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Raça</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Raça" 
                value={race} 
                onChange={(e) => setRace(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Título</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Título" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Origem</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Origem" 
                value={origin} 
                onChange={(e) => setOrigin(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Religião</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Religião" 
                value={religion} 
                onChange={(e) => setReligion(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Série</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Série" 
                value={series} 
                onChange={(e) => setSeries(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Primeira Aparição</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Primeira Aparição" 
                value={firstAppearance} 
                onChange={(e) => setFirstAppearance(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Descrição</label>
              <textarea 
                className={styles.formTextarea} 
                placeholder="Descrição" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
              />
            </div>

            <button className={styles.submitButton} type="submit">Cadastrar Personagem</button>
          </div>
        </form>
      </div>
    </div>
  );
}
