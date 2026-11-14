import { useEffect, useState } from "react";

export default function useDados(carregar) {
  const [estado, setEstado] = useState({ dados: null, erro: "", carregando: true });
  useEffect(() => {
    let ativo = true;
    carregar().then((dados) => {
      if (ativo) setEstado({ dados, erro: "", carregando: false });
    }).catch((erro) => {
      if (ativo) setEstado({ dados: null, erro: erro.message, carregando: false });
    });
    return () => { ativo = false; };
  }, [carregar]);
  return estado;
}
