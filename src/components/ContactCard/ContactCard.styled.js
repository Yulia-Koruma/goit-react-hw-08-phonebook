import styled from 'styled-components';

export const DeleteBtn = styled.button`
  min-width: 60px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.lightblue};
  border-radius: ${p => p.theme.radii.md};
  border: none;
  padding: ${p => p.theme.spacing(1)};
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const ContactWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;