import React from "react";
import ListContacts from "./contact/ListContact";
import contacts from "../data/contact";

// function ContactApp() {
//   return (
//     <div className="contact-app">
//       <h1>Daftar Contacts</h1>
//       <ListContacts contacts={contacts()} />
//     </div>
//   );
// }

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: contacts(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contact = this.state.data.filter((contact) => contact.id !== id);
    this.setState({
      data: contact,
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>My Contacts</h1>
        <ListContacts
          contacts={this.state.data}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
