import { Link } from "react-router-dom";

export default function ProfAlunoNotas() {
  return (
    <div>
      <h1>Aluno Nota</h1>

      <ul>
        <li>Nome: Nota:</li>
      </ul>
       <Link to="/professor">
          <button type="button">Voltar</button>
        </Link>
    </div>
  );
}