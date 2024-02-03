import styled from 'styled-components';

export const ContactsWraper = styled.div`
  max-width: 600px;
  padding: 16px 32px;
  margin: 0 auto;
  min-height: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`;

export const ListItem = styled.li`
  font-weight: 500;
  font-size: 18px;
`;