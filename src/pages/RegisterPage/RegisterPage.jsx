import { useForm } from "react-hook-form";

import css from "./RegisterPage.module.css";

import { registerRequest } from "../../api/request";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await registerRequest(data)
      .then(() => console.log(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <form className={css.form} onSubmit={onSubmit}>
        <label htmlFor="name" className={css.label}>
          Username:
        </label>
        <input
          placeholder="Username"
          className={css.input}
          type="text"
          id="name"
          name="name"
          {...register("name")}
        />

        <label htmlFor="email" className={css.label}>
          Email:
        </label>
        <input
          placeholder="email"
          className={css.input}
          type="email"
          id="email"
          name="email"
          {...register("email")}
        />

        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          placeholder="password"
          className={css.input}
          type="password"
          id="password"
          name="password"
          {...register("password")}
          autoFocus
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
