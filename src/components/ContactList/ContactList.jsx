import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  console.log(contacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
