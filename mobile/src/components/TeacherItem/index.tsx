import React from 'react';

import * as Styled from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <Styled.Container>
      <Styled.Profile>
        <Styled.Avatar
          source={{ uri: 'https://github.com/ialexanderbrito.png' }}
        />
        <Styled.ProfileInfo>
          <Styled.Name>Alexander</Styled.Name>
          <Styled.Subject>Informática</Styled.Subject>
        </Styled.ProfileInfo>
      </Styled.Profile>

      <Styled.Bio>
        Entusiasta das melhores tecnologias avançada.
        {'\n'}
        {'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiência.
      </Styled.Bio>

      <Styled.Footer>
        <Styled.Price>
          Preço/hora{'   '}
          <Styled.PriceValue>R$ 20,00</Styled.PriceValue>
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
}

export default TeacherItem;
