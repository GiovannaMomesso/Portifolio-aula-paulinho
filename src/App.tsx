import './App.css';
import Eu from "./assets/nos.jpg"; 

function App() {
  return (
    <div className="container-geral">
      
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Olá, somos <span>Giovanna Momesso & Hillary Isabelle</span></h1>
            <p>Dev Front e Back, venha conhecer meus projetos!</p>
            <a 
              href="https://github.com/giovanna.momesso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-github"
            >
              Ver Projetos no GitHub
            </a>
          </div>

          <div className="hero-image-container">
            <div className="image-glow"></div>
            <img src={Eu} alt="Foto de Giovanna" className="profile-img" />
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 • Projeto do <span>Paulinho</span>.</p>
      </footer>
    </div>
  );
}

export default App;