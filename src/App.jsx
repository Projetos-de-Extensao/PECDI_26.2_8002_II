
export default function App() {
  return (
    <main style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Tela de Login</h1>

      <form action="#dashboard-admin">
        <label htmlFor="usuario">CPF/E-mail:</label>
        <input
          id="usuario"
          type="text"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Entrar</button>

        <p>
          <a href="#cadastro-admin">Registrar Admin</a>
        </p>
      </form>
    </main>
  );
}