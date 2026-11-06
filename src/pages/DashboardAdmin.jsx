import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  return (
    <div>
      <h1>Dashboard Admin</h1>

      <ul>
        <li><Link to="/cadastro-admin">Cadastrar Admin</Link></li>
        <li><Link to="/cadastro-campus">Cadastrar Campus</Link></li>
        <li><Link to="/cadastro-sala">Cadastrar Sala</Link></li>
        <li><Link to="/cadastro-curso">Cadastrar Curso</Link></li>
        <li><Link to="/cadastro-materia">Cadastrar Matéria</Link></li>
        <li><Link to="/cadastro-professor">Cadastrar Professor</Link></li>
        <li><Link to="/cadastro-aluno">Cadastrar Aluno</Link></li>
        <li><Link to="/cadastro-turma">Cadastrar Turma</Link></li>
        <li><Link to="/alocacao">Alocação</Link></li>
      </ul>
    </div>
  );
}