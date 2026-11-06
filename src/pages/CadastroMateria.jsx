import { Link } from "react-router-dom";

export default function CadastroMateria() {
  return (
    <div>
      <h1>Cadastro de Matéria</h1>

      <input type="text" placeholder="Nome da Matéria" />
      <br /><br />

      <input type="number" placeholder="Carga Horária" />
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link to="/dashboard">Voltar</Link>
    </div>
  );
}