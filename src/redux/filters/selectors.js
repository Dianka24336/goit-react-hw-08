import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, selectNameFilter) => {
      return contacts.filter((item) =>
        item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
      );
    }
  );