import { Link } from "react-router-dom";

export default function CadastroAdmin() {
  return (
    <div>
      <h1>Cadastro de Admin</h1>

      <form>
        <input type="text" placeholder="CPF" /><br /><br />
        <input type="email" placeholder="E-mail" /><br /><br />
        <input type="password" placeholder="Senha" /><br /><br />

        <button type="submit">Salvar</button>

        {" "}

        <Link to="/dashboard">Voltar</Link>
      </form>
    </div>
  );
}