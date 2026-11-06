import { Link } from "react-router-dom";

export default function SalaAlocada() {
  return (
    <div>
      <h1>Sala disponiveis</h1>
      <p>Esta é a página da sala disponiveis.</p>
        <Link to="/aluno">
            <button type="button">Voltar</button>
        </Link>
    </div>  
  );
}