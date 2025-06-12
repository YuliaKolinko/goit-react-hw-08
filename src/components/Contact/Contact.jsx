import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <div className={css.conteiner}>
      <div className={css.info}>
        <div className={css.icon_box}>
          <FaUser className={css.icon} />
          <p className={css.name}>{contact.name}</p>
        </div>
        <div className={css.icon_box}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
