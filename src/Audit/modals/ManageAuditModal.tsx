import ActionIcon from '_metronic/assets/icons/ActionIcon';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

interface ManageAuditModalProps {
    show: boolean;
    handleClose: () => void;
}
const ManageAuditModal: React.FC<ManageAuditModalProps> = ({ show, handleClose }) => {
    const [currentModal, setCurrentModal] = useState<string | null>(null);

    const handleEditShow = () => {
        setCurrentModal('edit');
    };
    const handleEditClose = () => {
        setCurrentModal(null);
    };
    const handleDeleteShow = () => {
        setCurrentModal('delete');
    };
    const handleDeleteClose = () => {
        setCurrentModal(null);
    };
    const handleMainModalClose = () => {
        setCurrentModal(null);
        handleClose();
    };
    return (
        <>
            <Modal show={show && currentModal === null} onHide={handleMainModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Manage Audit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='table-responsive'>
                        <table className="manage-audit-table text-center table table-sm table-bordered vertical_middle matPersons" id="matPersons" aria-label="Manage Audit">
                            <thead className="thead-light">
                                <tr>
                                    <th>Audit Name</th>
                                    <th className="text-center">Assets</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">Test</td>
                                    <td className="p-2">0</td>
                                    <td className="p-2 d-flex align-item-center justify-content-evenly radio-controls ">
                                        <input type="radio" id="option1" name="auditOption" className="custom-radio" value="option1" defaultChecked />
                                        <label className="custom-radio-label" htmlFor="option1">Lock</label>
                                        <input type="radio" id="option2" name="auditOption" className="custom-radio" value="option2" />
                                        <label className="custom-radio-label" htmlFor="option2">Unlock</label>
                                    </td>
                                    <td role='cell' className='text-center h-auto'>
                                        <div className='dropdown'>
                                            <button
                                                className='dropdown-toggle'
                                                type='button'
                                                id='dropdownMenuButton1'
                                                data-bs-toggle='dropdown'
                                                aria-expanded='false'
                                            >
                                                Action
                                                <ActionIcon />
                                            </button>
                                            <ul
                                                className='dropdown-menu actions-dropdown'
                                                aria-labelledby='dropdownMenuButton1'
                                            >
                                                <li>
                                                    <button
                                                        className='dropdown-item'
                                                        onClick={handleEditShow}
                                                    >
                                                        Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className='dropdown-item'
                                                        onClick={handleDeleteShow}

                                                    >
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Test</td>
                                    <td className="p-2">0</td>
                                    <td className="p-2 d-flex align-item-center justify-content-evenly radio-controls">
                                        <input type="radio" id="option1" name="auditOption" className="custom-radio" value="option1" defaultChecked />
                                        <label className="custom-radio-label" htmlFor="option1">Lock</label>
                                        <input type="radio" id="option2" name="auditOption" className="custom-radio" value="option2" />
                                        <label className="custom-radio-label" htmlFor="option2">Unlock</label>
                                    </td>
                                    <td role='cell' className='text-center h-auto'>
                                        <div className='dropdown'>
                                            <button
                                                className='dropdown-toggle'
                                                type='button'
                                                id='dropdownMenuButton1'
                                                data-bs-toggle='dropdown'
                                                aria-expanded='false'
                                            >
                                                Action
                                                <ActionIcon />
                                            </button>
                                            <ul
                                                className='dropdown-menu actions-dropdown'
                                                aria-labelledby='dropdownMenuButton1'
                                            >
                                                <li>
                                                    <button
                                                        className='dropdown-item'
                                                        onClick={handleEditShow}
                                                    >
                                                        Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className='dropdown-item'
                                                        onClick={handleDeleteShow}

                                                    >
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn border cancel-btn' onClick={handleMainModalClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleMainModalClose}>
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}
            <Modal show={currentModal === 'edit'} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Audit Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <input type="text" className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn border cancel-btn' onClick={handleEditClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleEditClose}>
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
            {/* Delete Modal */}
            <Modal show={currentModal === 'delete'} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Audit Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this audit?</p>
                    <div className="mb-3 delete-audit-name">
                        <input type="text" value="Test" className="form-control" disabled />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn border cancel-btn' onClick={handleDeleteClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleDeleteClose}>
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ManageAuditModal;
