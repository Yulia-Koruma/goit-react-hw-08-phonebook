import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  FormContainer,
  TitleForm,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { FaPhone } from 'react-icons/fa';

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,
      'Phone number is not valid. Min 7 numbers (101-01-01)'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <FormContainer>
      <TitleForm>
        Phonebook{' '}
        <FaPhone
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </TitleForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          if (
            contacts.find(
              contact =>
                contact.name.toLocaleLowerCase() ===
                values.name.toLocaleLowerCase()
            )
          ) {
            return toast.error(`${values.name} is olready in your contacts`);
          }
          dispatch(addContact(values));
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
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};