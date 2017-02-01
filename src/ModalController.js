import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class ModalController extends Component {
    render() {
        return (
            <Modal show={this.props.modalVisibility}>
                <Modal.Header closeButton>
                    <Modal.Title>Congratulations! You've won the game!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><img alt="" id="shia" src="https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif"/></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onModalBtnClick}>Reset Game</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default ModalController
