import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles';

function TeacherList() {
  return (
    <Styled.Container>
      <PageHeader title="Proffys disponíveis" />

      <Styled.TeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Styled.TeacherList>
    </Styled.Container>
  );
}

export default TeacherList;
