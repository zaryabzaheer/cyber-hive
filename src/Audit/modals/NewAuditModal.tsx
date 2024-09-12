import React from 'react';
import { Modal } from 'react-bootstrap';

interface NewAuditModalProps {
    newAuditModal: boolean;
    handleClose: () => void;
}

const NewAuditModal: React.FC<NewAuditModalProps> = ({ newAuditModal, handleClose }) => {
    return (
        <Modal show={newAuditModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Audit Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <input type="text" className="form-control" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn cancel-btn border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handleClose}>
                    Add
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewAuditModal;
