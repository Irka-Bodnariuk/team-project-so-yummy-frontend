import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import { Input, EmailIcon, NameInput, WrapperForm, FormSubscribe, Title, Text } from './SubscribeForm.styled';
import { useMedia } from "hooks";


const SubscribeForm = () => {
  const { screenType } = useMedia();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <WrapperForm>
      {screenType === "desktop" ? (
        <>
        <Title>Subscribe to our Newsletter</Title>
        <Text>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</Text>
        </>
      ) : null}
    <Formik
      initialValues={{ subscribe: '' }}
      onSubmit={handleSubmit}
    > 
        <FormSubscribe>
          <NameInput>
            <EmailIcon
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6 1H15.4C15.824 1.00119 16.2302 1.1596 16.53 1.44065C16.8298 1.7217 16.9987 2.10254 17 2.5V11.5C16.9987 11.8975 16.8298 12.2783 16.53 12.5593C16.2302 12.8404 15.824 12.9988 15.4 13H2.6C2.17604 12.9988 1.76981 12.8404 1.47003 12.5593C1.17024 12.2783 1.00127 11.8975 1 11.5V2.5C1.00127 2.10254 1.17024 1.7217 1.47003 1.44065C1.76981 1.1596 2.17604 1.00119 2.6 1V1Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 2.49951L9 7.74951L1 2.49951"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </EmailIcon>
            <Input
              type="text"
              name="subscribe"
              placeholder="Enter your email address"
            />
          </NameInput>
          <Button
            type="submit"
            look="subscribe"
            size="11px 72px"
            sizeTablet="16px 50px"
            sizeDesktop="21px 134px"
            fontSize="14px"
            fontSizeTablet="16px"
          >
            Subcribe
          </Button>
        </FormSubscribe>
      </Formik>
      </WrapperForm>
    
  );
};

export default SubscribeForm;
