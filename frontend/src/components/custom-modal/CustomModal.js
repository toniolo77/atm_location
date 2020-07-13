import React from 'react';
import { Button, Modal } from 'react-bootstrap';


const CustomModal = (props) => {
    return (
        <Modal show={props.data.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


export default CustomModal;