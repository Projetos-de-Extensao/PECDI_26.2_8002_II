import { Link } from "react-router-dom";

export default function CadastroCurso() {
  return (
    <div>
      <h1>Cadastro de Curso</h1>

      <input type="text" placeholder="Nome do Curso" />
      <br /><br />

      <textarea placeholder="Ementa"></textarea>
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}