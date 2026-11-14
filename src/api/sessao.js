const chave = "teste-progresso:sessao";

export function lerSessao() {
  try { return JSON.parse(sessionStorage.getItem(chave)) || null; }
  catch { return null; }
}

export function salvarSessao(sessao) {
  sessionStorage.setItem(chave, JSON.stringify(sessao));
}

export function sair() {
  sessionStorage.removeItem(chave);
}
