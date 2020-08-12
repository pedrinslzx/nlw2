import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [bio, setBio] = useState("")
  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState("")

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 1, from: '08:00', to: '09:00' },
    { week_day: 2, from: '10:00', to: '11:00' }
  ])
  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      .then(() => {
        alert('Deu tudo certo')
        history.push('/')
      })
      .catch(() => alert('Opa! Algo deu errado'))
  }
  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, i) => {
      if (i === position) {
        return {
          ...scheduleItem, [field]: value
        }
      }
      return scheduleItem
    })
    setScheduleItems(updateScheduleItems)
  }
  function clearScheduleItem(i: number) {
    if (scheduleItems.length > 1) {
      const backupScheduleItems = scheduleItems.map(i => i)
      // eslint-disable-next-line
      const removeScheduleItem = backupScheduleItems.splice(i, 1)
      return setScheduleItems(backupScheduleItems)
    }
  }
  return (
    <div>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />
        <main>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Seus Dados</legend>
              <Input
                label="Nome Completo"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required={true}
              />
              <Input
                label="Avatar"
                name="avatar"
                type="url"
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
                required={true}
              />
              <Input
                label="WhatsApp"
                name="whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                required={true}
              />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={e => setBio(e.target.value)}
                required={true}
              />
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
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required={true}
              />
              <Input label="Custo da sua hora/aula" name="cost" value={cost} onChange={e => setCost(e.target.value)} required={true} />
            </fieldset>
            <fieldset>
              <legend>
                Horários Disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
              </button>
              </legend>
              {scheduleItems.map((scheduleItem, i) => {
                if (scheduleItems.length === 1) {
                  return (
                    <div key={i} className="schedule-item" id="no-remove">
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
                        onChange={e => setScheduleItemValue(i, 'week_day', e.target.value)}
                        value={scheduleItem.week_day}
                        placeholder="Selecione o dia da semana"
                        required={true}
                      />
                      <Input
                        label="Das"
                        name="from"
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleItemValue(i, 'from', e.target.value)}
                        required={true}
                      />
                      <Input
                        label="Até"
                        name="to"
                        type="time"
                        onChange={e => setScheduleItemValue(i, 'to', e.target.value)}
                        value={scheduleItem.to}
                        required={true}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div key={i} className="schedule-item">
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
                        onChange={e => setScheduleItemValue(i, 'week_day', e.target.value)}
                        value={scheduleItem.week_day}
                        placeholder="Selecione o dia da semana"
                        required={true}
                      />
                      <Input
                        label="Das"
                        name="from"
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleItemValue(i, 'from', e.target.value)}
                        required={true}
                      />
                      <Input
                        label="Até"
                        name="to"
                        type="time"
                        onChange={e => setScheduleItemValue(i, 'to', e.target.value)}
                        required={true}
                        value={scheduleItem.to}
                      />
                      <span className="remove" onClick={(e) => clearScheduleItem(i)}>Remover Horário</span>
                    </div>
                  )
                }
              })}
            </fieldset>
            <footer>
              <p>
                <img src={warningIcon} alt="Aviso Importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">
                Salvar Cadastro
              </button>
            </footer>
          </form>
        </main>
      </div>
    </div >
  );
}

export default TeacherForm;
