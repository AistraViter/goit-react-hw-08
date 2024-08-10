import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { getError, getIsLoading } from "../redux/contactsSlice";

// import { getTasks } from "../redux/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";


function App() {
  const { container, phonebookTitle, isLoadingText } = styles;

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h1 className={phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b className={isLoadingText}>Request in progress...</b>}
      <ContactList/>
    </div>
  );
}

export default App;
