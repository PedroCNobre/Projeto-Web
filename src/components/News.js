import React, { useState } from 'react';

function News() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Canto VI: The Heartbreaking Released',
      content: 'O sexto capítulo de Limbus Company, "The Heartbreaking," foi lançado, apresentando novos desafios e desenvolvimentos na história.'
    },
    {
      id: 2,
      title: 'New Character Skins',
      content: 'Novas skins para vários personagens foram introduzidas, permitindo mais opções de personalização.'
    },
    {
      id: 3,
      title: 'Major Bug Fixes and Improvements',
      content: 'A atualização mais recente inclui correções significativas de bugs e melhorias de desempenho para aprimorar a experiência de jogo.'
    },
    {
      id: 4,
      title: 'Season 3: Bon Voyage',
      content: 'A terceira temporada começou com novos ajustes no sistema e aumento dos níveis de identidade. Um novo item, Level Boost Ticket IV, foi adicionado.'
    },
    {
      id: 5,
      title: 'Refraction Railway Line 3',
      content: 'A nova Linha 3 do Refraction Railway foi adicionada, oferecendo novos desafios e recompensas no endgame.'
    },
    {
      id: 6,
      title: 'Season 4 Update',
      content: 'A quarta temporada inclui novos personagens como Heathcliff e introduz novos eventos e conteúdos de história.'
    },
    {
      id: 7,
      title: '1st Anniversary Event',
      content: 'Comemore o primeiro aniversário de Limbus Company com eventos especiais, recompensas gratuitas e atividades dentro do jogo.'
    }
  ]);

  return (
    <div>
      <h1>Notícias do Jogo</h1>
      <div className="news">
        {news.map(article => (
          <div key={article.id} className="news-article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
