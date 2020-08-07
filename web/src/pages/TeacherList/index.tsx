import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'
import Input from '../../components/Input';
const TeacherList: React.FC = () => {
  return (
    <div>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis">
          <form id="search-teachers">
            <Input name="subject" label="Matéria" />
            <Input name="weekDay" label="Dia da Semana" />
            <Input type="time" name="time" label="Hora" />
          </form>
        </PageHeader>
        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </main>
      </div>
    </div>
  );
}

export default TeacherList;
