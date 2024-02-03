import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      {error && (
        <Error>
          Oops! Something went wrong! Please try reloading this page!
        </Error>
      )}
      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}