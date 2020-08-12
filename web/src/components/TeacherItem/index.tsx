import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';
import api from '../../services/api';
interface Teacher {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number
}

const TeacherItem: React.FC<Teacher> = ({
  id,
  name,
  avatar,
  whatsapp,
  bio,
  subject,
  cost
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={avatar}
          alt={name}
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          onClick={(e) => {
            api.post('connections', {
              user_id: id
            })
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={'https://wa.me/' + whatsapp}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
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
