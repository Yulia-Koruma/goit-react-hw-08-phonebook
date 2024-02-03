import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  IconWrap,
  LogTitle,
  FormContainer,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
  MainLink,
} from './LogintForm.styled';
import { selectError } from '../../redux/auth/selectors';
import { CiLock } from 'react-icons/ci';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  return (
    <>
      <FormContainer>
        <IconWrap>
          <CiLock
            style={{
              width: '40px',
              height: '40px',
            }}
          />
        </IconWrap>
        <LogTitle>Log In</LogTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            dispatch(logIn(values));
            actions.resetForm();
          }}
        >
          <Form>
            <FormGroup>
              Email
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </FormGroup>

            <FormGroup>
              Password
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" />
            </FormGroup>

            <FormButton type="submit">Log in</FormButton>
          </Form>
        </Formik>
        <MainLink to="/register">Don't have an account? Register</MainLink>
      </FormContainer>
      {error &&
        toast.error(
          'Something went wrong! Please check your details and try again.'
        )}
    </>
  );
};