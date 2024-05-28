import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const RegistrationPopup  = ({open, onClose}) => {
    console.log('open', open)
    console.log('onClose', onClose)
    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Launch demo modal*/}
            {/*</Button>*/}

            <Modal className="modal-container" show={open} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
