import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import cancel from '../../assets/icons/cancel.svg';

import './styles.css';

interface HolmesModalProps {
    title: string,
    message: string,
    buttonText: string,
    setVisible: Function,
    confirmAction: Function
}

const HolmesModal:React.FC<HolmesModalProps> = (props) => {
    const [show] = useState(true);

    function close() {
        props.setVisible(false);
    }

    function confirm() {
        props.confirmAction();
    }

    return (
        <>
            <Modal
                size="lg"
                contentClassName="modal-container"
                show={show}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <img src={cancel} alt="Cancelar" className="modal-close" onClick={close}/>
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title">{props.title}</Modal.Title> 
                </Modal.Header>

                <Modal.Body className="modal-message">
                    <p>{props.message}</p>
                </Modal.Body>

                <Modal.Footer className="modal-footer">
                    <Button onClick={confirm}>{props.buttonText}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HolmesModal;