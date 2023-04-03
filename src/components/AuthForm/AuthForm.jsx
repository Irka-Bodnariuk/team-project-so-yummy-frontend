import React from "react";
import { Formik, Form, Field } from "formik";

import { Button } from "components/Button/Button";

export const AuthForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >
      <Form>
        <Field type="text" name="name" />
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <Button type="submit" look="subscribe" size="14px 110px">
          Sign up
        </Button>
      </Form>
    </Formik>
  );
};
