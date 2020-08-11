import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css'

 // eslint-disable-next-line
const scheduleItem = () => (
  <div className="schedule-item">
    <Select
      label="Dia da Semana"
      name="weekDay"
      options={[
        { value: '0', label: 'Domingo' },
        { value: '1', label: 'Segunda-Feira' },
        { value: '2', label: 'Terça-Feira' },
        { value: '3', label: 'Quarta-Feira' },
        { value: '4', label: 'Quinta-Feira' },
        { value: '5', label: 'Sexta-Feira' },
        { value: '6', label: 'Sábado' }
      ]}
      placeholder="Selecione o dia da semana"
    />
    <Input label="Das" name="from" type="time" />
    <Input label="Até" name="to" type="time" />
  </div>
)

const TeacherForm: React.FC = () => {
  const [scheduleItems,setScheduleItems] = useState([
    { week_day: 0, from:'8:00 AM', to: '4:00 PM'},
    { week_day: 2, from:'10:00 AM', to: '6:00 PM'}
  ])
  function addNewScheduleItem(){
    setScheduleItems([...scheduleItems, {
      week_day:0,
      from:'',
      to:''
    }])
  }
  return (
    <div>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />
        <main>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input label="Nome Completo" name="name" />
            <Input label="Avatar" name="avatar" type="url" />
            <Input label="WhatsApp" name="whatsapp" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>
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
              placeholder="Selecione uma matéria"
            />
            <Input label="Custo da sua hora/aula" name="cost" />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map(scheduleItem=>(
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  label="Dia da Semana"
                  name="weekDay"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-Feira' },
                    { value: '2', label: 'Terça-Feira' },
                    { value: '3', label: 'Quarta-Feira' },
                    { value: '4', label: 'Quinta-Feira' },
                    { value: '5', label: 'Sexta-Feira' },
                    { value: '6', label: 'Sábado' }
                  ]}
                  placeholder="Selecione o dia da semana"
                />
                <Input label="Das" name="from" type="time" />
                <Input label="Até" name="to" type="time" />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar Cadastro
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default TeacherForm;
