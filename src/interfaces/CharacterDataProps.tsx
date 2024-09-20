export interface CharacterData {
  nome: string;
  genero: string;
  titulo: string;
  raca: string;
  origem: string;
  religiao: string;
  serie: string;
  primeiraAparicao: string;
  imagem: string;
}

export interface FetchCharacterProps {
  characterName: string;
  characterData: CharacterData | null;
  errorMessage: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
