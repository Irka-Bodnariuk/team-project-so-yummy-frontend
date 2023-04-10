import { useState, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import ModalWrap from './ModalWrap/ModalWrap';

import {
  LogOutIcon,
  Modal,
  EditIcon,
  Text,
  Wrap,
  Overlay,
  ButtonClose,
} from './UserLogoModal.styled';

const UserLogoModal = ({ openModalEdit, setAvatar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return openModalEdit();
    }
  };

  const toggleModal = () => {
    setModalOpen(state => !state);
  };

  return (
    <Overlay onClick={clickCloseModal}>
      <Modal>
        <Wrap>
          <Text>Edit profile</Text>
          <ButtonClose
            onClick={() => {
              toggleModal();
              setEditModal(true);
            }}
          >
            <EditIcon />
          </ButtonClose>
        </Wrap>
        <Button
          onClick={() => {
            toggleModal();
            setEditModal(false);
          }}
          look="rounded_dark"
          type="button"
          fontSize="14px"
          fontSizeTablet="16px"
          width="125px"
          heigth="43px"
          widthTablet="141px"
          heigthTablet="43px"
        >
          Log out
          <LogOutIcon />
        </Button>
      </Modal>
      {modalOpen && (
        <ModalWrap
          openModal={toggleModal}
          edit={editModal}
          setAvatar={setAvatar}
        />
      )}
    </Overlay>
  );
};

export default UserLogoModal;
