import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

const TeacherForm: React.FC = () => {
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
          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>
            <Input label="Matéria" name="subject" />
            <Input label="Custo da sua hora/aula" name="cost" />
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
