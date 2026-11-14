import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



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
import AlunoAtribuir from "./pages/AlunoAtribuir.jsx";
import { lerSessao } from "./api/sessao";

function ExigirPapel({ papel, children }) {
  const sessao = lerSessao();
  if (sessao?.papel !== papel || !sessao.id) return <Navigate to={papel === "aluno" ? "/login-aluno" : "/login-professor"} replace />;
  return children;
}

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
        <Route path="/aluno" element={<ExigirPapel papel="aluno"><TelaAluno /></ExigirPapel>} />
        <Route path="/professor" element={<ExigirPapel papel="professor"><TelaProfessor /></ExigirPapel>} />
        <Route path="/sala-alocada" element={<ExigirPapel papel="professor"><SalaAlocada /></ExigirPapel>} />
        <Route path="/aluno-notas" element={<ExigirPapel papel="professor"><ProfAlunoNotas /></ExigirPapel>} />
        <Route path="/sala-disponiveis" element={<ExigirPapel papel="aluno"><SalaDisponiveis /></ExigirPapel>} />
        <Route path="/aluno-nota" element={<ExigirPapel papel="aluno"><AlunoNota /></ExigirPapel>} />
        <Route path="/lancar-nota" element={<ExigirPapel papel="professor"><AlunoAtribuir /></ExigirPapel>} />
        <Route path="/aluno-atribuir" element={<ExigirPapel papel="professor"><Navigate to="/lancar-nota" replace /></ExigirPapel>} />

      
      
      </Routes>
    </BrowserRouter>
  );
}