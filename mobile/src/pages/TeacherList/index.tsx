import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as Styled from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <Styled.Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <Styled.SearchForm>
            <Styled.Label>Matéria</Styled.Label>
            <Styled.Input
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            ></Styled.Input>

            <Styled.InputGroup>
              <Styled.InputBlock>
                <Styled.Label>Dia da semana</Styled.Label>
                <Styled.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                ></Styled.Input>
              </Styled.InputBlock>

              <Styled.InputBlock>
                <Styled.Label>Horário</Styled.Label>
                <Styled.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                ></Styled.Input>
              </Styled.InputBlock>
            </Styled.InputGroup>

            <Styled.SubmitButton>
              <Styled.SubmitButtonText>Filtrar</Styled.SubmitButtonText>
            </Styled.SubmitButton>
          </Styled.SearchForm>
        )}
      </PageHeader>

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
