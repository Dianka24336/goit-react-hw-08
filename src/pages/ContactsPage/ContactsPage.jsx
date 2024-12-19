import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {/* {error && <h2>Oops...Something went wrong!!!</h2>} */}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default ContactsPage;
