import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import * as Styled from './styles';

function TeacherItem() {
  return (
    <Styled.Article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/36086408?s=460&u=b421d7781a879cfd7a33a04e783bccfb4afbc867&v=4"
          alt="Alexander"
        />
        <div>
          <strong>Alexander</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </Styled.Article>
  );
}

export default TeacherItem;
