import React from "react";
import ListContacts from "./contact/ListContact";
import contacts from "../data/contact";
import InputContact from "./contact/InputContact";
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: contacts(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contact = this.state.data.filter((contact) => contact.id !== id);
    this.setState({
      data: contact,
    });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        data: [
          ...prevState.data,
          { id: +new Date(), name, tag, imageUrl: "/images/default.jpg" },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contact Apps</h1>
        <h2>Add New Contact</h2>
        <InputContact addContact={this.onAddContactHandler} />
        <h2>My Contact</h2>
        <ListContacts
          contacts={this.state.data}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
