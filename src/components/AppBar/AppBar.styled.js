import styled from 'styled-components';

export const NavigationHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  min-height: 64px;
  padding-right: ${p => p.theme.spacing(6)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-top: ${p => p.theme.spacing(6)};
  padding-bottom: ${p => p.theme.spacing(6)};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;