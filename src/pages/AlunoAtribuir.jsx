import { Link } from "react-router-dom";

export default function AlunoAtribuir() {
  return (
    <div>
      <h1>Atribuir Nota</h1>

        <form className="grade-form">
          <label className="radio-option" htmlFor="materia1">
            <input type="radio" id="materia1" name="materia" value="Materia1" />
            <span>Matéria 1</span>
          </label>
          <label className="radio-option" htmlFor="materia2">
            <input type="radio" id="materia2" name="materia" value="Materia2" />
            <span>Matéria 2</span>
          </label>
          <button type="submit">Atribuir nota</button>
        </form>

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}