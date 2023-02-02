import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact_item__body">
      <h3 className="contact_item__title">{name}</h3>
      <p className="contact_item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
