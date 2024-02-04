import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px;
  padding: 16px 32px;
  margin: 0 auto;
`;
export const TitleForm = styled.h2`
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  margin: 0 auto;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.spacing(2)};
  font: inherit;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.grey};
  background-color: ${p => p.theme.colors.lightgray};
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 14px;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 100px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.lg};
  border: none;
  padding: ${p => p.theme.spacing(3)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.active};
  }
`;