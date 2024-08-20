import Image from "next/image";

export default function Button() {
  return (
    <div className="container">

      <div className="button-container">
        <div className="button">
          <div className="text">
            <p>Classico</p>
            <span>Cada rodada revela pistas sobre o charater</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className="circle">
          <div className="logo">
            <Image src="/images/targeryan.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className="button-container">
        <div className="button">
          <div className="text">
            <p>Descricao</p>
            <span>Adivinhe o personagem por sua descrição</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className="circle">
          <div className="logo">
            <Image src="/images/perg.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className="button-container">
        <div className="button">
          <div className="text">
            <p>Imagem</p>
            <span>Adivinhe o personagem por foto desfocada</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className="circle">
          <div className="logo">
            <Image src="/images/eye.png" alt="circle" width={50} height={35} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

      <div className="button-container">
        <div className="button">
          <div className="text">
            <p>Emoji</p>
            <span>Adivinhe personagens com base em emojis</span>
          </div>
          <Image src="/images/botao.png" alt="button" width={255} height={72} />
        </div>
        <div className="circle">
          <div className="logo">
            <Image src="/images/emoji.png" alt="circle" width={50} height={50} />
          </div>
          <Image src="/images/circle.png" alt="circle" width={80} height={80} />
        </div>
      </div>

    </div>
  );
}