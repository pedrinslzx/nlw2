import React, { useState } from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import './styles.css'

interface Teacher {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  count: string

}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([] as Teacher[])
  useState(() => {
    api.get('connections').then(res => {
      console.log(res.data.ranking)
      setTeachers(res.data.ranking || [])
    }).catch(() => alert('Opa! Deu erro'))
  })
  return (
    <div>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes é o ranking de proffys" description="Veja os proffys com mais conexões" />
        <main>
          {teachers.map((teacher: Teacher) => {
            if (teacher !== null) {
              return (
                <article key={teacher.id} className="teacher-item">
                  <header>
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                    />
                    <div>
                      <strong>{teacher.name}</strong>
                    </div>
                  </header>
                  <p>{teacher.bio}</p>
                  <footer>
                    <p>
                      Total de conexões
                      <strong>{teacher.count}</strong>
                    </p>
                    <a
                      onClick={(e) => {
                        api.post('connections', {
                          user_id: teacher.id
                        })
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://wa.me/' + teacher.whatsapp}
                    >
                      <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                  </a>
                  </footer>
                </article>
              )
            }
          })}
        </main>
      </div>
    </div>
  );
}

export default TeacherList;
