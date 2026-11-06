import { Link } from "react-router-dom";

export default function SalaAlocada() {
  return (
    <div>
      <h1>Sala Alocada</h1>
      <p>Esta é a página da sala alocada.</p>
        <Link to="/professor">
            <button type="button">Voltar</button>
        </Link>
    </div>  
  );
}