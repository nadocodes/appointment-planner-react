import React from "react";

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange}>
      <option defaultValue="selected" >None</option>
      {contacts.map((contact, index) => {
        return <option key={index}>{contact.name}</option>;
      })}
    </select>
  );
};
