import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
        <footer>
          <p>
            Preço/Hora
          <strong>R$ 20,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
        </footer>
      </article>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
            alt="Mayk Brito"
          />
          <div>
            <strong>Mayk Brito</strong>
            <span>Educação Física</span>
          </div>
        </header>
        <p>
          Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
              <br /><br />
              Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
            </p>
        <footer>
          <p>
            Preço/Hora
                <strong>R$ 40,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
                  Entrar em contato
                </button>
        </footer>
      </article>
      <article className="teacher-item">
        <header>
          <img
            src="https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/s150x150/100618578_1490653101129585_4912246098929647616_n.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_ohc=x1F_wwIS_mMAX-R0Rq-&oh=80b7237ebf02bf48ffa0626f3eec9652&oe=5F54F9E7"
            alt="Tiago Luchtenberg"
          />
          <div>
            <strong>Tiago Luchtenberg</strong>
            <span>Geografia</span>
          </div>
        </header>
        <p>
          As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
            <br /><br />
                Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
            </p>
        <footer>
          <p>
            Preço/Hora
                <strong>R$ 360,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
                  Entrar em contato
                </button>
        </footer>
      </article>
    </>
  );
}

export default TeacherItem;


// interface TeacherItemProps {
//   name: string,
//   imgUrl: string,
//   matter: string,
//   description?: string,
//   price: string
// }
