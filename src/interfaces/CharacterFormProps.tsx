export interface CharacterFormProps {
  name: string;
  description: string;
  house: string;
  gender: string;
  race: string;
  title: string;
  origin: string;
  religion: string;
  series: string;
  firstAppearance: string;
}

export interface UploadHookReturn {
  progress: number;
  handleUpload: (file: File | null, characterData: CharacterFormProps) => void;
}
