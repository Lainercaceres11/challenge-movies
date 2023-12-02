import { useForm } from "react-hook-form";

import css from "./LoginPage.module.css";

import { loginRequest } from "../../api/request";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await loginRequest(data);
  });

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
          placeholder="Password"
          {...register("password")}
          autoFocus
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
