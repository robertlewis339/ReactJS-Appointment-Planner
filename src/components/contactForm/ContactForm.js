import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({ target }) => { setName(target.value) }}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={phone}
        pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        onChange={({ target }) => { setPhone(target.value) }} 
        placeholder="Phone Number"
        required
      />
      <input
        type="email"
        value={email}
        onChange={({ target }) => { setEmail(target.value) }} 
        placeholder="Email"
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};
