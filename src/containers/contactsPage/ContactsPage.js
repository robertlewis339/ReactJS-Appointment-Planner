import React from "react";
import { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {

      addContact(name, phone, email);
      // reseting values
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  useEffect(() => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      return;
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        objArr={props.contacts}/>
      </section>
    </div>
  );
};
