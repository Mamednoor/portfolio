import React, { Component } from "react";
import "../stylesheet/Contact.css";
import SendBtnModal from "../shared/SendBtnModal";

class Contact extends Component {
state = {
    firstname: "",
    subject: "",
    email: "",
    input: false,
    
};

myChangeHandler = event => {
    let change = event.target.name;
    let changeSubmit = event.target.value;
    this.setState({ [change]: changeSubmit }, ()=>{
        if(this.state.firstname.length > 0 && this.state.subject.length < 0 && this.state.email.length < 0){
            this.setState({input: true})
        }
    });
};

handleSubmit = event => {
    event.preventDefault();
};

render() {
    const { changeSubmit, myChangeHandler } = this;
        return (
            <div className ="contact-div">
                <h1 className="contact-hun">Formulaire de contact</h1>
                <form className="contact-form">
                    <label htmlfor="fname" className="contact-label">Votre Nom et Prénom :</label>
                    <input
                        className="contact-input"
                        type="text"
                        name="firstname"
                        placeholder="Nom & Prénom"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="sujet" className="contact-label">Sujets :</label>
                    <input
                        className="contact-input"
                        type="text"
                        name="subject"
                        placeholder="Conseils, Demandes, Contacts"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="emailAddress" className="contact-label">Email :</label>
                    <input
                        className="contact-input"
                        id="emailAddress"
                        type="email"
                        placeholder="Exemple@exemple.com"
                        name="email"
                        value={changeSubmit}
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="subject" className="contact-label">Message :</label>
                    <textarea className="contact-textarea" name="textarea"/>
                    <input className="contact-input" type="submit" value="Enregistrer"></input>
                </form>
                <SendBtnModal />
            </div>
        );
    }
}

export default Contact;
