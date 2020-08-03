import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.6;
  }

  > img {
    height: 1.6rem;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`;
