import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/limbus_logo_text_02-1.webp';

function Header({ title }) {
  return (
    <header>
      <nav class="menu">
        <ul class="menuList">
          <li class="menuList__item menuList__item--big"><Link className="menuList__link" to="/"><img class="logo" src={Logo}/></Link></li>
          <li class="menuList__item"><Link className="menuList__link" to="/about">Sobre o Jogo</Link></li>
          <li class="menuList__item"><Link className="menuList__link" to="/gallery">Galeria de Fotos</Link></li>
          <li class="menuList__item"><Link className="menuList__link" to="/news">Notícias do Jogo</Link></li>
          <li class="menuList__item"><Link className="menuList__link" to="/contact">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
