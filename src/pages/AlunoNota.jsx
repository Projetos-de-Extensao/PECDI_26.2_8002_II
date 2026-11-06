import { Link } from "react-router-dom";

export default function AlunoNota() {
  return (
    <div>
      <h1>Sua Nota</h1>

      <ul>
        <li>Nota: </li>

        <Link to="/aluno">
          <button type="button">Voltar</button>
        </Link>
      </ul>
    </div>
  );
}