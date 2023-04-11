import { Formik } from 'formik';
import {
  Container,
  ButtonClose,
  ButtonAdd,
  CloseIcon,
  Photo,
  PlusIcon,
  EditIcon,
  FormEdit,
  LabelPhoto,
  Input,
  UserIcon,
  LabelInput,
} from './UserInfoModal.styled';

import { Button } from 'components/Button/Button';

import { updateUserProfile } from 'store/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup.string().min(4).required(),
});

const UserInfoModal = ({ onClose }) => {
  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme);
  const avatar = useSelector(state => state.auth.user.avatar);
  const userName = useSelector(state => state.auth.user.name);
  const [selectedFile, setSelectedFile] = useState(avatar);

  const handleSubmit = values => {
    const formData = new FormData();

    if (values.avatarURL === '' && values.name === userName) {
      alert('There are no changes!');
      return;
    }
    if (values.avatarURL === '' && values.name !== userName) {
      formData.append('name', values.name);
      dispatch(updateUserProfile(formData));
      onClose();

      return;
    }

    formData.append('avatar', values.avatarURL);
    formData.append('name', values.name);
    dispatch(updateUserProfile(formData));
    onClose();
  };

  const handelPick = () => {
    filePicker.current.click();
  };

  return (
    <Formik
      initialValues={{
        avatarURL: '',
        name: userName,
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {props => (
        <FormEdit onSubmit={props.handleSubmit}>
          <ButtonClose type="button" onClick={onClose} dark={darkMode.darkMode}>
            <CloseIcon />
          </ButtonClose>
          <Container>
            <LabelPhoto>
              <Photo src={selectedFile} alt={userName} />
              <input
                className="hidden"
                type="file"
                ref={filePicker}
                name="avatarURL"
                accept="image/*,.png, .jpeg,.gif,.web"
                onBlur={() => {
                  props.setTouched({
                    avatarURL: true,
                  });
                }}
                onChange={event => {
                  if (!event.target.files[0]) {
                    alert('Incorrect file format!');
                    return;
                  }
                  setSelectedFile(
                    window.URL.createObjectURL(event.target.files[0])
                  );
                  props.setFieldValue('avatarURL', event.target.files[0]);
                }}
              />

              <ButtonAdd
                type="button"
                onClick={handelPick}
                dark={darkMode.darkMode}
              >
                <PlusIcon />
              </ButtonAdd>
            </LabelPhoto>
            <LabelInput>
              <UserIcon />

              <EditIcon />

              <Input
                type="text"
                name="name"
                placeholder="Your name"
                onBlur={() => {
                  props.setTouched({
                    name: true,
                  });
                }}
              />
            </LabelInput>

            <Button
              type="submit"
              look="logout"
              width="100%"
              heigth="49px"
              heigthTablet="59px"
              fontSize="14px"
              fontSizeTablet="16px"
              lineHeight="18px"
            >
              Save changes
            </Button>
          </Container>
        </FormEdit>
      )}
    </Formik>
  );
};

export default UserInfoModal;
