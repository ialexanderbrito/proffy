import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import * as Styled from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Styled.PageHeader className="page-header">
      <Styled.TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </Styled.TopBarContainer>

      <Styled.HeaderContent>
        <strong>{props.title}</strong>

        {props.children}
      </Styled.HeaderContent>
    </Styled.PageHeader>
  );
};

export default PageHeader;
