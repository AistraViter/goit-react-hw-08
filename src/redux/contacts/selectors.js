import {createSelector} from "@reduxjs/toolkit";
import { selectFilter} from "../filters/slice";
import {selectContacts} from "./slice"


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      return contacts.filter((contact) =>
        contact.name?.toLowerCase().includes(filter?.toLowerCase() || "")
      );
    }
  );
  