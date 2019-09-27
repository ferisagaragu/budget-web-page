import React, { ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

interface Props { 
  title: string;
  modalShow: boolean;
  body: ReactElement;
  onHide: Function;
  size: 'sm' | 'lg' | 'xl';
}

export const ModalComponent = ({ title, modalShow, onHide, body, size }: Props) => {
  return (
    <Modal
      size={ size }
      show={ modalShow }
      onHide={ () => onHide() }
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          { title }
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        { body }
      </Modal.Body>
    </Modal>
  );
}

export const ModalCenteredComponent = ({ title, modalShow, onHide, body, size }: Props) => {
  return (
    <Modal
      size={ size }
      show={ modalShow }
      onHide={ () => onHide() }
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          { title }
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        { body }
      </Modal.Body>
    </Modal>
  );
}