import { useForm } from "react-hook-form";

import css from "./LoginPage.module.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuhtProvider";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login, isAuth } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/movies");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <form className={css.form} onSubmit={onSubmit}>
        <label htmlFor="email" className={css.label}>
          Email:
        </label>
        <input
          className={css.input}
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          {...register("email")}
        />

        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          className={css.input}
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          {...register("password")}
          autoFocus
        />

        <button type="submit">Login</button>
      </form>

      <div className={css.login__foo}>
        <p>¿Aun no estas registrado?  <Link to="/"><button>Register</button></Link> </p>
       
      </div>
    </div>
  );
};

export default LoginPage;
