import React, { Component } from "react";
import "../stylesheet/Contact.css";
import '../stylesheet/SendBtnModal.css'


class Contact extends Component {
state = {
    firstname: "",
    sujet: "",
    email: "",
    message:"",
    input: false,
    visible:false
    
};

myChangeHandler = (event) => {
    this.setState({[event.target.id] : event.target.value.replace(/[.*+?^${}()|[]\]/g, "")},
    () => {
        if(this.state.firstname.length > 0 && this.state.subject.length < 0 && this.state.email.length < 0)
        {this.setState({input: true})}
    }
    )
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
};

render() {
    const {myChangeHandler, handleSubmit } = this;
        return (
            <div className ="contact-div" id='Contact'>
                <h1 className="contact-hun">Formulaire de contact</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlfor="firstname" className="contact-label">Votre Nom et Prénom :</label>
                    <input
                        className="contact-input"
                        type="text"
			            id="firstname"
                        name="firstname"
                        placeholder="Nom & Prénom"
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="sujet" className="contact-label">Sujets :</label>
                    <input
                        className="contact-input"
                        type="text"
			            id="sujet"
                        name="sujet"
                        placeholder="Conseils, Demandes, Contacts"
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="email" className="contact-label">Email :</label>
                    <input
                        className="contact-input"
                        id="email"
                        type="email"
                        placeholder="Exemple@exemple.com"
                        name="email"
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="message" className="contact-label">Message :</label>
                    <textarea className="contact-textarea" type="text" name="textarea" id="message"/>
                    <input className="contact-input" type="submit" value="Envoyez"/>
                </form>
            </div>
        );
    }
}

export default Contact;
