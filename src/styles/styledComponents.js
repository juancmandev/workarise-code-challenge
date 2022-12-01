import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;
  padding: 32px 0;
  background-color: #90caf9;

  @media screen and (max-width: 600px) {
    display: ${(props) => props.show || 'none'};
    position: absolute;
    z-index: 10;
  }
`;

export const AsidePuller = styled.button`
  width: 20px;
  height: 100vh;
  background-color: #90caf9;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.show === 'block' ? 'none' : 'block')};
  }
`;

export const SPAContainer = styled.div`
  display: flex;
`;

export const MainContainer = styled.main`
  padding: 40px 20px 0;
`;

export const CloseMenuIconContainer = styled.div`
  padding: 0 16px;
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const Form = styled.form`
  display: grid;
  row-gap: 24px;
  margin-bottom: 48px;
`;

export const CreateCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;
