import { Link } from "react-router-dom";

export default function LoginProfessor() {
  return (
    <div>
      <h1>Tela de Login</h1>

      <form>
        <label>CPF/E-mail:</label><br />
        <input type="text" /><br /><br />

        <label>Senha:</label><br />
        <input type="password" /><br /><br />

        <Link to="/aluno">
          <button type="button">Entrar</button>
        </Link>

        {" "}
      </form>
    </div>
  );
}