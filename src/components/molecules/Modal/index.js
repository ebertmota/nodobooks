import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          background: 'transparent',
          color: '#000000',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '736px',
          border: 'none',
        },
        overlay: {
          zIndex: 10,
          backgroundColor: '#121214e6',
          width: '100%',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  /**
   *  Defines whether the modal is open
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   *  function called for change modal status, closing or opening
   */
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
