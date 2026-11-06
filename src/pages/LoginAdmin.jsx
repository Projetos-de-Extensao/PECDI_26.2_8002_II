import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Tela de Login</h1>

      <form>
        <label>CPF/E-mail:</label><br />
        <input type="text" /><br /><br />

        <label>Senha:</label><br />
        <input type="password" /><br /><br />

        <Link to="/dashboard">
          <button type="button">Entrar</button>
        </Link>

        {" "}

        <Link className="action-link" to="/cadastro-admin">
          Registrar Admin
        </Link>
      </form>
    </div>
  );
}