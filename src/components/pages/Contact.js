import React, { Component } from "react";
import "../stylesheet/Contact.css";

class Contact extends Component {
state = {
    firstname: "",
    subject: "",
    email: ""
};

myChangeHandler = event => {
    let change = event.target.name;
    let changeSubmit = event.target.value;
    this.setState({ [change]: changeSubmit });
};

handleSubmit = event => {
    event.preventDefault();
};

render() {
    const { changeSubmit, myChangeHandler } = this;
        return (
            <div>
                <h1>Formulaire de contact</h1>
                <form>
                    <label htmlfor="fname">Firstname</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name!"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="sujet">Subjet</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject!"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="emailAddress">Email</label>
                    <input
                        id="emailAddress"
                        type="email"
                        placeholder="Email!"
                        name="email"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="subject">Message</label>
                    <textarea name="textarea"></textarea>
                    <input type="submit" value="Submit!" />
                </form>
            </div>
        );
    }
}

export default Contact;
