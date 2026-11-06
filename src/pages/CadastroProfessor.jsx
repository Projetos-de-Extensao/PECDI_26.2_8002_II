import { Link } from "react-router-dom";

export default function CadastroProfessor() {
  return (
    <div>
      <h1>Cadastro Professor</h1>

      <input type="text" placeholder="CPF" />
      <br /><br />

      <input type="email" placeholder="E-mail" />
      <br /><br />

      <textarea placeholder="Disponibilidade"></textarea>
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}