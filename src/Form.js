import React from "react";
import "./Form.css";
class NameBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      eMail: "",
      birthPlace: "",
      phone: 0,
      favoriteFood: "",
      aboutYou: "",
      badges: [],
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <input
          className="one"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={this.state.firstName}
        ></input>
        <input
          className="two"
          name="lastName"
          value={this.state.lastName}
          type="text"
          placeholder="Last Name"
        ></input>
        <input
          className="three"
          type="text"
          placeholder="Email"
          name="eMail"
          value={this.state.eMail}
        ></input>
        <input
          className="four"
          type="text"
          placeholder="Place of Birth"
          name="birthPlace"
          value={this.state.birthPlace}
        ></input>
        <input
          className="five"
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={this.state.phone}
        ></input>
        <input
          className="six"
          type="text"
          placeholder="Favorite Food"
          name="favoriteFood"
          value={this.state.favoriteFood}
        ></input>
        <textarea
          name="aboutYou"
          value={this.state.aboutYou}
          placeholder="Tell us about yourself"
        ></textarea>
        <input type="submit"></input>
      </form>
    );
  }
}

export default NameBadge;
