import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/about">Sobre o Jogo</Link></li>
          <li><Link to="/gallery">Galeria de Fotos</Link></li>
          <li><Link to="/news">Notícias do Jogo</Link></li>
          <li><Link to="/contact">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
