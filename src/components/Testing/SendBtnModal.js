import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import '../stylesheet/SendBtnModal.css'

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
            <div className="sndbtnmod-fulldiv">
                <input className="sndbtnmod-input" type="submit" value="Envoyez" onClick={() => openModal()} />
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
            </div>
        );
    }
}

export default SendBtnModal