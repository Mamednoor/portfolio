import React, { Component } from "react";
import Modal from 'react-awesome-modal';
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


openModal = () => {
    this.setState({visible:true}, () => {
            if(this.state.firstname.length > 0 && this.state.subject.length < 0 && this.state.email.length < 0){
                this.setState({input: true})}
})}

closeModal = () => {
    this.setState({
        visible:false
    })
}

myChangeHandler = (event) => {
    this.setState({[event.target.id] : event.target.value.replace(/[.*+?^${}()|[]\]/g, "")},
    // () => {
    //     if(this.state.firstname.length > 0 && this.state.subject.length < 0 && this.state.email.length < 0)
    //     {this.setState({input: true})}
    // }
    )
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
};

render() {
    const {myChangeHandler, handleSubmit } = this;
    const {openModal, closeModal} = this
    const{visible} = this.state
        return (
            <div className ="contact-div">
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
                    <label htmlfor="emailAddress" className="contact-label">Email :</label>
                    <input
                        className="contact-input"
                        id="emailAddress"
                        type="email"
                        placeholder="Exemple@exemple.com"
                        name="email"
                        
                        onChange={myChangeHandler}
                    />
                    <label htmlfor="message" className="contact-label">Message :</label>
                    <textarea className="contact-textarea" type="text" name="textarea" id="message"/>
                    <input className="contact-input" type="submit" value="Envoyez" onClick={() => openModal()} />
                    <Modal
                        visible={visible}
                        width="400"
                        height="300"
                        effect="fadeInDown"
                        onClickAway={() => closeModal()}
                    >
                        <div className="sndbtnmod-divun">
                            <h1 className="sndbtnmod-hun">Message envoyé</h1>
                            <p className="sndbtnmod-p">Merci d'avoir pris contact avec nous</p>
                            <input className="sndbtnmod-input" type="submit" value="Close" onClick={() => closeModal()} />
                        </div>
                    </Modal>
                </form>
            </div>
        );
    }
}

export default Contact;
