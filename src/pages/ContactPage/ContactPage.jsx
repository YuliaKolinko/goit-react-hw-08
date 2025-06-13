import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactPage.module.css";

export default function ContactPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h3>Create new contact</h3>
      <main className={css.main}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading contacts...</p>}
        {error && <p>Error: {error}</p>}
        <ContactList />
      </main>
    </div>
  );
}
