import { Formik } from 'formik';
import {
  Container,
  ButtonClose,
  ButtonAdd,
  CloseIcon,
  Photo,
  PlusIcon,
  EditIcon,
  FormSubscribe,
  Wrap,
  Input,
  UserIcon,
  WrapInput,
} from './EditUser.styled';

import { Button } from 'components/Button/Button';

import { updateUserProfile } from 'store/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

const EditUser = ({ onClose }) => {
  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const avatarUrl = useSelector(state => state.auth.user.avatar);
  const userName = useSelector(state => state.auth.user.name);
  const [selectedFile, setSelectedFile] = useState(avatarUrl);

  const handleSubmit = values => {
    const formData = new FormData();
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
        avatarURL: avatarUrl,
        name: userName,
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {props => (
        <FormSubscribe onSubmit={props.handleSubmit}>
          <ButtonClose type="button" onClick={onClose}>
            <CloseIcon />
          </ButtonClose>
          <Container>
            <Wrap>
              <Photo src={selectedFile} alt={userName} />
              <input
                className="hidden"
                type="file"
                ref={filePicker}
                name="avatarURL"
                accept="image/*,.png, .jpeg,.gif,.web"
                onChange={event => {
                  if (event.target.files[0]) {
                    setSelectedFile(
                      window.URL.createObjectURL(event.target.files[0])
                    );
                    props.setFieldValue('avatarURL', event.target.files[0]);
                  } else {
                    alert('Incorrect file format!');
                    return;
                  }
                }}
              />

              <ButtonAdd type="button" onClick={handelPick}>
                <PlusIcon />
              </ButtonAdd>
            </Wrap>
            <WrapInput>
              <UserIcon />

              <EditIcon />

              <Input type="text" name="name" placeholder="Your name" />
            </WrapInput>

            <Button
              type="submit"
              look="subscribe"
              width="100%"
              heigth="59px"
              heigthTablet="59px"
              fontSize="16px"
            >
              Save changes
            </Button>
          </Container>
        </FormSubscribe>
      )}
    </Formik>
  );
};

export default EditUser;
