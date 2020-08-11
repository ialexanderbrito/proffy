import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import * as Styled from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
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
              value={subject}
              onChangeText={(text) => setSubject(text)}
            ></Styled.Input>

            <Styled.InputGroup>
              <Styled.InputBlock>
                <Styled.Label>Dia da semana</Styled.Label>
                <Styled.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                ></Styled.Input>
              </Styled.InputBlock>

              <Styled.InputBlock>
                <Styled.Label>Horário</Styled.Label>
                <Styled.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                ></Styled.Input>
              </Styled.InputBlock>
            </Styled.InputGroup>

            <Styled.SubmitButton onPress={handleFiltersSubmit}>
              <Styled.SubmitButtonText>Filtrar</Styled.SubmitButtonText>
            </Styled.SubmitButton>
          </Styled.SearchForm>
        )}
      </PageHeader>

      <Styled.TeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Styled.TeacherList>
    </Styled.Container>
  );
}

export default TeacherList;
