import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const LogOutBtn = styled.button`
  min-width: 100px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.md};
  border: none;
  padding: ${p => p.theme.spacing(2)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${p => p.theme.colors.active};
  }
`;