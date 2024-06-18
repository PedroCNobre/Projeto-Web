import React from 'react';
import imagebanner from '../assets/homebanner.webp'

function Home() {
  return (
    <div class="hero">
      <img class="background-img" src={imagebanner}/>
      
      <div class="conteudo">
        <li class="conteudo__item--title">Bem vindo ao site não oficial de Limbus Company</li>
        <li class="conteudo__item">Esse site foi feito para apresentar o jogo Limbus Company para pessoas interessadas.</li>
        <li class="conteudo__item">Esperamos que durante a navegação vocês gostem do jogo e do site em si.</li>
      </div>
    </div>
  );
}

export default Home;
