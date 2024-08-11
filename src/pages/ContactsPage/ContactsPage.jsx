import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { getError, getIsLoading } from "../../redux/contacts/slice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";


function ContactsPage() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <h2 >Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b className={css.isLoadingText}>Request in progress...</b>}
      <ContactList/>
    </div>
  );
}

export default ContactsPage;
