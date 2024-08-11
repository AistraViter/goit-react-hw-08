import {createSelector} from "@reduxjs/toolkit";
import { selectFilter} from "../filters/slice";
import {getContacts} from "./slice"


export const selectFilteredContacts = createSelector(
    [getContacts, selectFilter],
    (contacts, filter) => {
      return contacts.filter((contact) =>
        contact.name?.toLowerCase().includes(filter?.toLowerCase() || "")
      );
    }
  );
  