import { useForm } from "react-hook-form";

import css from "./RegisterPage.module.css";

import { useAuth } from "../../context/AuhtProvider";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { registerApp } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerApp(data)
    } catch (error) {
      console.log(error)
    }

    navigate("/login");
});


  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <form className={css.form} onSubmit={onSubmit}>
        <label htmlFor="name" className={css.label}>
          Username:
        </label>
        <input
          placeholder="Nombre"
          className={css.input}
          type="text"
          id="nombre"
          name="nombre"
          required
          {...register("nombre")}
        />

        <label htmlFor="email" className={css.label}>
          Email:
        </label>
        <input
          placeholder="Email"
          className={css.input}
          type="email"
          id="correo"
          name="correo"
          required
          {...register("correo")}
        />

        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          placeholder="Password"
          className={css.input}
          type="password"
          id="contrasena"
          name="contrasena"
          required
          {...register("contrasena")}
          autoFocus
        />

        <button type="submit">Register</button>
      </form>

      <div className={css.login__foo}>
        <p>Ya estas registrado?  <Link to="/login"><button>Login</button></Link> </p>
      </div>
    </div>
  );
};

export default RegisterPage;
