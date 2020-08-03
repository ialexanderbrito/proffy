import React from 'react';

import PageHeader from '../../components/PageHeader';

import * as Styled from './styles';

function TeacherForm() {
  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </Styled.PageTeacherForm>
  );
}

export default TeacherForm;
