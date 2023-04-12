import { useState } from 'react';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { useSelector } from 'react-redux';

import { Container, Photo, WrapPhoto, Name } from './UserLogo.styled';
import { useLocation } from 'react-router-dom';

const UserLogo = () => {
  const { pathname } = useLocation();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const avatar = useSelector(state => state.auth.user.avatar);
  const name = useSelector(state => state.auth.user.name);

  const toggleModalEdit = () => setmodalIsOpen(state => !state);
  return (
    <Container>
      <WrapPhoto onClick={toggleModalEdit}>
        <Photo src={avatar} alt={name} />
        <Name pathname={pathname}>{name}</Name>
      </WrapPhoto>
      {modalIsOpen && <UserLogoModal openModalEdit={toggleModalEdit} />}
    </Container>
  );
};

export default UserLogo;
