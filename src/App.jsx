import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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
      </Routes>
    </BrowserRouter>
  );
}