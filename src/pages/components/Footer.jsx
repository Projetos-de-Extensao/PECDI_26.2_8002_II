export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Ibmec. Todos os direitos reservados.</p>
      <nav aria-label="Redes sociais">
        <ul className="footer-social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <i className="fa-brands fa-discord" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}