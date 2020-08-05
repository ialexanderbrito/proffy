import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import * as Styled from './styles';

function TeacherForm() {
  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Styled.Main>
        <Styled.Fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <br />
          <Input name="avatar" label="Avatar" />
          <br />
          <Input name="whatsapp" label="WhatsApp" />
          <br />
          <Textarea name="bio" label="Biografia" />
        </Styled.Fieldset>

        <Styled.Fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Mátemática', label: 'Mátemática' },
              { value: 'Portguês', label: 'Portguês' },
              { value: 'Química', label: 'Química' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Informática', label: 'Informática' },
            ]}
          />
          <br />
          <Input name="cost" label="Custo da sua hora por aula" />
        </Styled.Fieldset>

        <Styled.Fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <Styled.ScheduleItem>
            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </Styled.ScheduleItem>
        </Styled.Fieldset>

        <Styled.Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <Styled.Button>Salvar cadastro</Styled.Button>
        </Styled.Footer>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
}

export default TeacherForm;
