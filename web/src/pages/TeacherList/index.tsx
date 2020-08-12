import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'

interface Teacher {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  week_day: string,
  from: number,
  to: number,
  cost: number
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [week_day, setWeekDay] = useState("")
  const [subject, setSubject] = useState("")
  const [time, setTime] = useState("")
  function searchTeachers(e: FormEvent) {
    e.preventDefault()
    api.get('classes', {
      params: {
        week_day, subject, time
      }
    }).then(res => {
      const data = res.data
      setTeachers(data)
    }).catch(() => alert('Opa! Deu erro'))
    console.log({
      week_day, subject, time
    })
  }
  return (
    <div>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis">
          <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              label="Matéria"
              name="subject"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' }
              ]}
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="Selecione uma matéria"
            />
            <Select
              label="Dia da Semana"
              name="week_day"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-Feira' },
                { value: '2', label: 'Terça-Feira' },
                { value: '3', label: 'Quarta-Feira' },
                { value: '4', label: 'Quinta-Feira' },
                { value: '5', label: 'Sexta-Feira' },
                { value: '6', label: 'Sábado' }
              ]}
              placeholder="Dia da Semana"
              value={week_day}
              onChange={e => setWeekDay(e.target.value)}
            />
            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
            <button type="submit">
              Buscar
            </button>
          </form>
        </PageHeader>
        <main>
          {teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              id={teacher.id}
              avatar={teacher.avatar}
              bio={teacher.bio}
              cost={teacher.cost}
              whatsapp={teacher.whatsapp}
              name={teacher.name}
              subject={teacher.subject}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default TeacherList;
