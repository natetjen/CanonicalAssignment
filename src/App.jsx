import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './comp/Card.jsx';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className='cards-container row'>
        {cards.map((card) => {
          let date = new Date(card.modified);
          const options = { day: 'numeric', month: 'long', year: 'numeric' };
          const formattedDate = date.toLocaleDateString('en-GB', options);
          return (
            <Card
              key={card.id}
              pic={card.featured_media}
              title={card.title.rendered}
              titleLink={card.link}
              author={card._embedded.author[0].name}
              authorLink={card._embedded.author[0].link}
              date={formattedDate}
              excerpt={card.excerpt.rendered}
              content={card.content.rendered}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
