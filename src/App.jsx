import { BrowserRouter, Routes, Route } from "react-router-dom";



import DefinirUsuario from "./pages/DefinirUsuario.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import LoginProfessor from "./pages/LoginProfessor.jsx";
import LoginAluno from "./pages/LoginAluno.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import CadastroAdmin from "./pages/CadastroAdmin";
import CadastroCampus from "./pages/CadastroCampus";
import CadastroSala from "./pages/CadastroSala";
import CadastroCurso from "./pages/CadastroCurso";
import CadastroMateria from "./pages/CadastroMateria";
import CadastroProfessor from "./pages/CadastroProfessor";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroTurma from "./pages/CadastroTurma";
import Alocacao from "./pages/Alocacao";
import TelaAluno from "./pages/TelaAluno";
import TelaProfessor from "./pages/TelaProfessor";
import SalaAlocada from "./pages/SalaAlocada.jsx";
import ProfAlunoNotas from "./pages/ProfAlunoNotas.jsx";
import SalaDisponiveis from "./pages/SalasDisponiveis.jsx";
import AlunoNota from "./pages/AlunoNota.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefinirUsuario />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-aluno" element={<LoginAluno />} />
        <Route path="/login-professor" element={<LoginProfessor />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/cadastro-admin" element={<CadastroAdmin />} />
        <Route path="/cadastro-campus" element={<CadastroCampus />} />
        <Route path="/cadastro-sala" element={<CadastroSala />} />
        <Route path="/cadastro-curso" element={<CadastroCurso />} />
        <Route path="/cadastro-materia" element={<CadastroMateria />} />
        <Route path="/cadastro-professor" element={<CadastroProfessor />} />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-turma" element={<CadastroTurma />} />
        <Route path="/alocacao" element={<Alocacao />} />
        <Route path="/aluno" element={<TelaAluno />} />
        <Route path="/professor" element={<TelaProfessor />} />
        <Route path="/sala-alocada" element={<SalaAlocada />} />
        <Route path="/aluno-notas" element={<ProfAlunoNotas />} />
        <Route path="/sala-disponiveis" element={<SalaDisponiveis />} />
        <Route path="/aluno-nota" element={<AlunoNota />} />

      
      
      </Routes>
    </BrowserRouter>
  );
}