import {
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikError,
  } from 'formik';
  import { NavLink } from 'react-router-dom';
  import styled from 'styled-components';
  
  export const IconWrap = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${p => p.theme.colors.lightblue};
    border-radius: 50%;
    margin: 0 auto;
  
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  export const LogTitle = styled.h2`
    margin: 0 auto;
    text-align: center;
  `;
  
  export const FormContainer = styled.div`
    max-width: 600px;
    padding: 16px 32px;
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
    border-radius: ${p => p.theme.radii.md};
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: ${p => p.theme.spacing(2)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
    &:hover {
      background-color: ${p => p.theme.colors.active};
    }
  `;
  
  export const MainLink = styled(NavLink)`
    color: ${p => p.theme.colors.pink};
    font-size: 14px;
    font-weight: 500;
  `;