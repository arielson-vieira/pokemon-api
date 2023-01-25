import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import { useAuth } from "../../Services/Providers/auth";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const input = document.querySelectorAll("input");
  input.forEach((i) => i.style.setProperty("user-select", "none", "important"));

  const {
    userUnregistered,
    setUserUnregistered,
    setUserRegisterDone,
    userRegisterDone,
    time,
    setTime,
    formData,
    setFormData,
  } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Digite o seu nome.")
      .min(3, "Mínimo de 3 letras"),
    email: Yup.string()
      .email("Endereço de e-mail inválido")
      .required("E-mail é obrigatório"),
    confirmEmail: Yup.string()
      .oneOf(
        [Yup.ref("email"), null],
        "Os endereços de e-mail devem ser idênticos"
      )
      .required("Confirme o e-mail"),
    password: Yup.string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas devem ser idênticas")
      .required("Confirme a sua senha."),
  });

  const userRegister = (values, { setSubmitting }) => {
    setFormData(values);
    localStorage.setItem("formData", JSON.stringify(values));
    setSubmitting(false);
    setUserRegisterDone(true);
    setUserUnregistered(false);
    setTime(3);
  };

  return (
    <div className="formContent">
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
          <Form className={"formContainer"}>
            <div>
              <label className="formLabel">Nome</label>
              <Field name="name" placeholder="Digite o seu nome." />
              <ErrorMessage
                name="name"
                component="div"
                className="errorMessage"
              />
            </div>
            <div>
              <label className="formLabel">E-mail</label>
              <Field
                name="email"
                type="email"
                placeholder="Digite o seu e-mail."
              />
              <ErrorMessage
                name="email"
                component="div"
                className="errorMessage"
              />
            </div>
            <div>
              <label className="formLabel">Confirmar e-mail</label>
              <Field
                name="confirmEmail"
                type="email"
                placeholder="Confirme o seu e-mail."
              />
              <ErrorMessage
                name="confirmEmail"
                component="div"
                className="errorMessage"
              />
            </div>
            <div>
              <label className="formLabel">Senha</label>
              <Field
                name="password"
                type="password"
                placeholder="Digite a sua senha."
              />
              <ErrorMessage
                name="password"
                component="div"
                className="errorMessage"
              />
            </div>
            <div>
              <label className="formLabel">Confirmar senha</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha."
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="errorMessage"
              />
            </div>
            <div className="buttonSubmitRegister">
              <button type="submit">Cadastrar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
