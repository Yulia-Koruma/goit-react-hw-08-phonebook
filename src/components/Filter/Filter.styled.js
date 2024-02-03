import styled from 'styled-components';

export const FilterContainer = styled.div`
  max-width: 600px;
  padding: 16px 32px;
  margin: 0 auto;
  text-align: center;
`;

export const FindGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Findinput = styled.input`
  padding: ${p => p.theme.spacing(2)};
  font: inherit;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.grey};
  background-color: ${p => p.theme.colors.lightgray};
`;