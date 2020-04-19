import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class SendBtnModal extends Component {
        state = {
            visible : false
        }
    

    openModal = () => {
        this.setState({
            visible : true
        });
    }

    closeModal = () => {
        this.setState({
            visible : false
        });
    }

    render() {
        const {openModal, closeModal} = this
        const{visible} = this.state
        return (
            <div>
                <input className="contact-input" type="submit" value="Envoyez" onClick={() => openModal()} />
                <Modal 
                    visible={visible}
                    width="400"
                    height="300"
                    effect="fadeInDown"
                    onClickAway={() => closeModal()}
                >
                    <div>
                        <h1>Message envoyez</h1>
                        <p>Merci d'avoir pris contact avec nous</p>
                        <input className="contact-input" type="submit" value="Close" onClick={() => closeModal()} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default SendBtnModal