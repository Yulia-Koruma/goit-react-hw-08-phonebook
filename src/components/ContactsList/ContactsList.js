import { useSelector } from 'react-redux';
import { List, ListItem, ContactsWraper } from './ContactsList.styled';
import { ContactCard } from '../ContactCard/ContactCard';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactsList = () => {
  const items = useSelector(selectVisibleContacts);

  return (
    <ContactsWraper>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ContactCard contact={item} />
          </ListItem>
        ))}
      </List>
    </ContactsWraper>
  );
};