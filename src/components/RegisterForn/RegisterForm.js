import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
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
} from './RegisterForm.styled';
import { CiLock } from 'react-icons/ci';
import { selectError } from '../../redux/auth/selectors';

const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const RegisterForm = () => {
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
        <LogTitle>Register</LogTitle>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            dispatch(register(values));
            actions.resetForm();
          }}
        >
          <Form>
            <FormGroup>
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="span" />
            </FormGroup>

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

            <FormButton type="submit">Register</FormButton>
          </Form>
        </Formik>
        <MainLink to="/login">Already have an account? Log in</MainLink>
      </FormContainer>
      {error &&
        toast.error(
          'Something went wrong! Please check your details and try again.'
        )}
    </>
  );
};