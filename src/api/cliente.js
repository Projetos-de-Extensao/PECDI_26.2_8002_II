const base = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");

async function requisicao(caminho, opcoes) {
  let resposta;
  try {
    resposta = await fetch(`${base}${caminho}`, opcoes);
  } catch {
    throw new Error("Não foi possível acessar a API simulada. Verifique se ela está ligada.");
  }
  if (!resposta.ok) throw new Error("Não foi possível carregar ou salvar os dados. Verifique se a API simulada está ligada.");
  return resposta.json();
}

export const listarAlunos = () => requisicao("/alunos");
export const listarProfessores = () => requisicao("/professores");
export const listarNotasDoAluno = (id) => requisicao(`/notas?alunoId=${encodeURIComponent(id)}`);
export const listarMaterias = () => requisicao("/materias");
export const listarAlocacoesDoProfessor = (id) => requisicao(`/alocacoes?professorId=${encodeURIComponent(id)}`);
export const listarSalas = () => requisicao("/salas");
export const listarNotas = () => requisicao("/notas");

export async function salvarNota({ alunoId, materiaId, valor }) {
  const numero = Number(valor);
  if (!alunoId || !materiaId) throw new Error("Selecione um aluno e uma matéria.");
  if (String(valor).trim() === "" || !Number.isFinite(numero) || numero < 0 || numero > 10) {
    throw new Error("Informe uma nota entre 0 e 10.");
  }
  const notas = await listarNotas();
  const existente = notas.find((nota) => nota.alunoId === alunoId && nota.materiaId === materiaId);
  return requisicao(existente ? `/notas/${encodeURIComponent(existente.id)}` : "/notas", {
    method: existente ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ alunoId, materiaId, valor: numero }),
  });
}
