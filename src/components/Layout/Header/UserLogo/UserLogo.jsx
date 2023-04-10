import { useState } from 'react';
import UserLogoModal from '../UserModal/UserLogoModal';
import { useSelector } from 'react-redux';

import { Container, Photo, WrapPhoto, Name } from './UserLogo.styled';

const UserLogo = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const avatar = useSelector(state => state.auth.user.avatar);
  const name = useSelector(state => state.auth.user.name);

  const toggleModalEdit = () => setmodalIsOpen(state => !state);
  return (
    <Container>
      <WrapPhoto onClick={toggleModalEdit}>
        <Photo src={avatar} alt={name} />
        <Name>{name}</Name>
      </WrapPhoto>
      {modalIsOpen && <UserLogoModal openModalEdit={toggleModalEdit} />}
    </Container>
  );
};

export default UserLogo;
