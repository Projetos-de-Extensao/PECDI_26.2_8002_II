import { Link } from "react-router-dom";

export default function TelaProfessor() {
  return (
    <div>
      <h1>Área do Professor</h1>

      <ul className="navigation-list">
        <li><Link to="/sala-alocada">Sala alocada</Link></li>
        <li><Link to="/aluno-notas">Alunos com notas atribuídas</Link></li>
      </ul>
    </div>
  );
}