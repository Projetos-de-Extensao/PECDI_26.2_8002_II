import { Link } from "react-router-dom";

export default function CadastroSala() {
  return (
    <div>
      <h1>Cadastro de Sala</h1>

      <input type="text" placeholder="Nome da Sala" />
      <br /><br />

      <input type="number" placeholder="Capacidade" />
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}