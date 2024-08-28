import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>

      <div className="headerContainer">
        <Header />
      </div>

      <div className="textContainer">
        <Text 
          text="Adivinhe diariamente um personagem de"
          textOne="Game of Thrones"
          textThree="ou"
          textTwo="House of the Dragon"
        />
      </div>

      <div className="buttonsContainer">
        <Button 
          title="Classico"
          info="Consiga pistas a cada tentativa"
          iconsrc="/images/targeryan.png"
        />
        <Button 
          title="Descricao"
          info="Adivinhe o personagem pela descrição"
          iconsrc="/images/perg.png"
        />
        <Button 
          title="Imagem"
          info="Adivinhe o personagem pela foto desfocada"
          iconsrc="/images/eye.png"
        />
        <Button 
          title="Emojis"
          info="Adivinhe o personagem pelos emojis"
          iconsrc="/images/emoji.png"
        />
      </div>

    </div>
  );
}
