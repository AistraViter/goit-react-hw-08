import {createSelector} from "@reduxjs/toolkit";
import { getFilter} from "../filters/slice";
import {getContacts} from "./slice"


export const selectFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
      return contacts.filter((contact) =>
        contact.name?.toLowerCase().includes(filter?.toLowerCase() || "")
      );
    }
  );
  