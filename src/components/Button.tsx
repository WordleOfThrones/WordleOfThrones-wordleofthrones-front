import Image from "next/image";

export default function Button() {
  return (
    <div className="container">

      <div className="button-container">
        <div className="button">
          <div className="text">
            <p>Classico</p>
            <span>Consiga pistas a cada rodada</span>
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
            <span>Com caracteristicas individ</span>
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
            <span>Adivinhe por imagens desfoc</span>
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
            <span>Adivinhe personagens com em</span>
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