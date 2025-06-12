import { selectNameFilter } from "../filtres/selectors";
import { createSelector } from "reselect";
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
