import { Container, Photo, WrapPhoto, Name } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <Container>
      <WrapPhoto>
        <Photo />
        <Name>Name</Name>
      </WrapPhoto>
    </Container>
  );
};

export default UserLogo;
