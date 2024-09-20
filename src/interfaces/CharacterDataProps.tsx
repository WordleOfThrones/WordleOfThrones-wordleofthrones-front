export interface CharacterData {
  map(arg0: (character: { idPersonagem: import("react").Key | null | undefined; imagem: string | undefined; nome: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | Promise<import("react").AwaitedReactNode> | null | undefined; genero: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; titulo: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; raca: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; origem: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; religiao: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; serie: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; primeiraAparicao: string | number | bigint | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | null | undefined; }) => import("react").JSX.Element): import("react").ReactNode;
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
