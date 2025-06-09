import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { isSelectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PageTitle>Contacts</PageTitle>
      <ContactForm />
      <div>
        {" "}
        {isLoading && "Request in progress..."}
        {error && <Error>Error message</Error>}
      </div>
      <ContactList />
    </>
  );
}
