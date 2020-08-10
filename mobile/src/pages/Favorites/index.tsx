import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles';

function Favorites() {
  return (
    <Styled.Container>
      <PageHeader title="Meus proffys favoritos" />

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

export default Favorites;
