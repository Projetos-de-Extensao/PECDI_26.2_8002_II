import { Link } from "react-router-dom";

export default function DefinirUsuario() {
  return (
    <div>
      <h1>Definir Usuário</h1>

        <Link to="/login-admin">

        {" "}
            <button type="button">Administrador</button>   
        </Link>

        <Link to="/login-aluno">
            <button type="button">Aluno</button>
        </Link>

        <Link to="/login-professor">
            <button type="button">Professor</button>
        </Link>
    </div>
  );
}