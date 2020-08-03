import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles';

function TeacherList() {
  return (
    <Styled.PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <Styled.Main>
        <TeacherItem />
      </Styled.Main>
    </Styled.PageTeacherList>
  );
}

export default TeacherList;
