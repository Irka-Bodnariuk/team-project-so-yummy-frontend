import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import { Input, EmailIcon, NameInput, WrapperForm, FormSubscribe, Title, Text } from './SubscribeForm.styled';
import { AddSvg } from 'components/AddSvg/AddSvg';
import { useMedia } from "hooks";
import { updateSubscribe } from 'api/serviseApi';
import FormError from 'components/FormError/FormError';
import * as yup from "yup";

const schema = yup.object().shape({
  subscribe: yup.string().min(4).email().required(),
})


const SubscribeForm = () => {
  const { screenType } = useMedia();

  const handleSubmit = async (values, { resetForm }) => {
    const data = await updateSubscribe();
    console.log(values);
    console.log(data);
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
      validationSchema={schema}
      onSubmit={handleSubmit}
    > 
        <FormSubscribe>
          <NameInput>
            <EmailIcon>
            <AddSvg
              name="email"
              width="16px"
              height="12px"
              widthTable="20px"
              heightTablet="16px"
              widthDesktop="20px"
              heightDesktop="16px"
              />
            </EmailIcon>
            <Input
              type="email"
              name="subscribe"
              placeholder="Enter your email address"
            />
            <FormError name="subscribe"/>
          </NameInput>
          <Button
            type="submit"
            look="subscribe"
            size="11px 72px"
            sizeTablet="16px 50px"
            sizeDesktop="21px 134px"
            fontSize="14px"
            fontSizeTablet="16px"
            lineHeight="16px"
            lineHeightTablet="18px"
          >
            Subcribe
          </Button>
        </FormSubscribe>
      </Formik>
      </WrapperForm>
    
  );
};

export default SubscribeForm;
