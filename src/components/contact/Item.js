import React from "react";
import ContactItemBody from "./ItemBody";
import ContactItemImage from "./ItemImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ name, tag, id, imageUrl, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
