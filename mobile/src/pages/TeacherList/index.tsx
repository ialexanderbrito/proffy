import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles';

function TeacherList() {
  return (
    <Styled.Container>
      <PageHeader title="Proffys disponíveis" />

      <TeacherItem />
    </Styled.Container>
  );
}

export default TeacherList;
