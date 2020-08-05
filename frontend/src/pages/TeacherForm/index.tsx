import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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
        </Styled.Fieldset>

        <Styled.Fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" />
          <br />
          <Input name="cost" label="Custo da sua hora por aula" />
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
