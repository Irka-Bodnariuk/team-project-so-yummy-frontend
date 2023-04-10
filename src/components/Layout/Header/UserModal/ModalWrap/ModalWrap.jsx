import { useState, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import { Overlay, Modal } from './ModalWrap.styled';
import EditUser from '../EditUser/EditUser';
import LogOut from '../LogOut/LogOut';

const ModalWrap = ({ openModal, edit, setAvatar }) => {
  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return openModal();
    }
  };

  return (
    <Overlay onClick={clickCloseModal}>
      <Modal>
        {edit ? (
          <EditUser onClose={openModal} setAvatar={setAvatar} />
        ) : (
          <LogOut onClose={openModal} />
        )}
      </Modal>
    </Overlay>
  );
};

export default ModalWrap;
