import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import { useAuth } from "../../Services/Providers/auth";

const Forms = () => {
  const [formData, setFormData] = useState({});
  const {
    userUnregistered,
    setUserUnregistered,
    setUserRegisterDone,
    userRegisterDone,
    time,
    setTime,
  } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Nome é obrigatório")
      .min(3, "Mínimo de 3 letras"),
    email: Yup.string()
      .email("Endereço de e-mail inválido")
      .required("E-mail é obrigatório"),
    confirmEmail: Yup.string()
      .oneOf(
        [Yup.ref("email"), null],
        "Os endereços de e-mail devem ser idênticos"
      )
      .required("Confirmação de e-mail é obrigatória"),
    password: Yup.string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas devem ser idênticas")
      .required("Confirmação de senha é obrigatória"),
  });

  function userRegister(e) {
    setUserRegisterDone(true);
    setUserUnregistered(false);
    setTime(3)
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={userRegister}
    >
      {({ errors, touched }) => (
        <Form className={"form-container"}>
          <div>
            <label>Nome:</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>E-mail:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Confirmar e-mail:</label>
            <Field name="confirmEmail" type="email" />
            <ErrorMessage name="confirmEmail" component="div" />
          </div>
          <div>
            <label>Senha:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Confirmar senha:</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
