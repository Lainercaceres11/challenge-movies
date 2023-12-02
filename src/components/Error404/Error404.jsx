
import css from "./Error404.module.css"
const Error404 = () => {
  return (
    <div className={css.error_404}>
      <h1>¡Ups!</h1>
      <p>
        Parece que la página que estás buscando no existe.
      </p>
      <p>
        ¿Has introducido la URL correctamente? ¿Has probado a buscarla de otra manera?
      </p>
      <p>
        Si no encuentras la página que estás buscando, puedes intentar lo siguiente:
      </p>
      <ul>
        <li>Buscar la página en el menú principal.</li>
        <li>Ir a la página de inicio.</li>
        <li>Utilizar el buscador de la web.</li>
      </ul>
      <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fHww" alt="Gato con cara de sorpresa" />
      <a href="/" className="boton">Volver a la página principal</a>
    </div>
  );
};

export default Error404;