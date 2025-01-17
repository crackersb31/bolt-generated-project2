import Header from './components/Header.js';
import './styles/main.css';

document.getElementById('app').innerHTML = `
      ${Header()}
      <main>
        <p>Bienvenue dans mon projet !</p>
      </main>
    `;
