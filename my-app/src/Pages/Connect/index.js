import React, { useEffect } from "react";
import "./index.css";
import { useAuth } from "../../Services/Providers/auth";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Header from "../../Components/Header";

const Connect = () => {
  const { setUserConnect, setFormData } = useAuth();
  const { setUserPublic } = useAuth();

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .required("Insira o seu login.")
      .min(3, "Mínimo de 3 letras"),
    password: Yup.string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
  });

  const userLogin = (values) => {
    setFormData(values);
    localStorage.setItem("formData", JSON.stringify(values));
    setUserConnect(true);
    setUserPublic();
    navigate("/");
  };

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="pageConnect">
      <Header />
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={userLogin}
      >
        {({ errors, touched }) => (
          <div className="connectContainer">
            <div>
              <Form className={"formConnect"}>
                <div>
                  <label className="labelConnect">Login</label>
                  <Field name="login" />
                  <ErrorMessage
                    name="login"
                    component="div"
                    className="errorMessageConnect"
                  />
                </div>
                <div>
                  <label className="labelConnect">Senha</label>
                  <Field name="password" type="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="errorMessageConnect"
                  />
                </div>
                <div className="allButtonConnect">
                  <button onSubmit={""} onClick={userLogin}>
                    <div className="buttonConnect">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                    <span>Logar</span>
                  </button>
                </div>
                <div className="forgotPassword">
                  <button>Esqueceu a senha?</button>
                </div>
                <div className="createAccount">
                  <Link to="/registro">Cadastre-se</Link>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
};
export default Connect;
