import React from 'react';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as Styled from './styles';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Styled.Container>
      <Styled.Profile>
        <Styled.Avatar source={{ uri: teacher.avatar }} />
        <Styled.ProfileInfo>
          <Styled.Name>{teacher.name}</Styled.Name>
          <Styled.Subject>{teacher.subject}</Styled.Subject>
        </Styled.ProfileInfo>
      </Styled.Profile>

      <Styled.Bio>{teacher.bio}</Styled.Bio>

      <Styled.Footer>
        <Styled.Price>
          Preço/hora{'   '}
          <Styled.PriceValue>R$ {teacher.cost}</Styled.PriceValue>
        </Styled.Price>

        <Styled.ButtonsContainer>
          <Styled.FavoriteButton>
            {/* <Styled.Favorite source={heartOutlineIcon} /> */}
            <Styled.Favorite source={unfavoriteIcon} />
          </Styled.FavoriteButton>

          <Styled.ContactButton>
            <Styled.Whatsapp source={whatsappIcon} />
            <Styled.ContactButtonText>
              Entrar em contato
            </Styled.ContactButtonText>
          </Styled.ContactButton>
        </Styled.ButtonsContainer>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default TeacherItem;
