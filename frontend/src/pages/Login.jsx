import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import style from "./login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.username && formValues.password) {
      console.log("Formulário válido. Dados:", formValues);

      // Aqui você pode enviar os dados para um servidor usando fetch ou axios

      navigate("/");
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <div className={style.form}>
      <div>
        <h1>Login</h1>
        <h2>Faça login e garanta o seu lugar na diversão</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuário ou E-mail"
          value={formValues.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <NavLink to="" className={style.esquecisenha}>
          Esqueci minha senha
        </NavLink>
        <button className={style.entrar} type="submit">
          ENTRAR
        </button>
        <div className={style.line}></div>
      </form>
      <div>
        <NavLink to="/Registrar" className={style.navlink}>
          <button className={style.cadastrar}>CADASTRE-SE</button>
        </NavLink>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <>
      <Header />
      <div>
        <div className={style.page}>
          <div className={style.intro}>
            <img
              src="src/assets/Logo.svg"
              alt="Logo Cinema"
              className={style.logologin}
            />
            <h2 className={style.texto1}>
              Escolha suas sessões, reserve seus lugares e entre de cabeça em
              narrativas que cativam e emocionam. Este é o nosso convite para
              você vivenciar o cinema de maneira única. Nossa página de login é
              a porta de entrada para essa experiência excepcional, e estamos
              empolgados para compartilhar cada momento cinematográfico com
              você.
            </h2>
          </div>
          <LoginComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
