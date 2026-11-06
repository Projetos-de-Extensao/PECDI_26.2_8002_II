import { Link } from "react-router-dom";

export default function CadastroCampus() {
  return (
    <div>
      <h1>Cadastro de Campus</h1>

      <input type="text" placeholder="Cidade" />
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}