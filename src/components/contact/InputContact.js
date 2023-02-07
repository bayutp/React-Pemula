import React from "react";

class InputContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState({ name: event.target.value });
  }

  onTagChangeHandler(event) {
    this.setState({ tag: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={this.onNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Tags"
          onChange={this.onTagChangeHandler}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default InputContact;
