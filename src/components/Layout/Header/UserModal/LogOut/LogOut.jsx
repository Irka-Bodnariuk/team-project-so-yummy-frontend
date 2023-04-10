import { Button } from 'components/Button/Button';
import {
  Container,
  ButtonClose,
  CloseIcon,
  Title,
  Wrap,
} from './LogOut.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'store/auth/authOperations';

const LogOut = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ButtonClose onClick={onClose}>
        <CloseIcon />
      </ButtonClose>
      <Title>Are you sure you want to log out?</Title>
      <Wrap>
        <Button
          type="button"
          look="logout"
          width="137px"
          heigth="49px"
          heigthTablet="59px"
          fontSize="16px"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Log out
        </Button>
        <Button
          type="button"
          look="cancel"
          width="137px"
          heigth="49px"
          heigthTablet="59px"
          fontSize="16px"
          onClick={onClose}
        >
          Cancel
        </Button>
      </Wrap>
    </Container>
  );
};

export default LogOut;
