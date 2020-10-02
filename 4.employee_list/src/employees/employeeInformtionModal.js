import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EmployeeInformtionModal(props) {
    return (
        <div>
            <Modal show={props.open} onHide={props.handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><img className="img-thumbnail" src={props.single.avatar} alt={props.single.first_name} /></td>
                                <td className="text-center align-middle">
                                <i className="fa fa-user"></i> {props.single.first_name} {props.single.last_name}
                                <br />
                                <i className="fa fa-envelope"></i> {props.single.email}
                            </td>
                            </tr>
                        </tbody>
                    </table>
                                            </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick = {props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    );
}

export default EmployeeInformtionModal;
