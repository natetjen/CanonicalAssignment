import React, { useState } from 'react';
import { Button, Card as Cards } from 'vanilla-framework-react';

function Card({ pic, title, titleLink, author, authorLink, date, excerpt, content }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {setModalOpen(true)};
  const closeModal = () => setModalOpen(false);

  return (
    <Cards title="CLOUD AND SERVER" className='custom-card'>
      <div className="border">
        <div className="pcard u-bo-padding">
          <img src={pic} alt="Card Image" className="p-card__image"/>
        </div>
        <a href={titleLink}>
          <h2 className="p-card__title">{title}</h2>
        </a>
        <p className="p-card__text authorDate">
          By <a href={authorLink}>{author}</a> on {date}
        </p>
      </div>
      <div className="p-card__content-container">
        <p className="p-card__text" dangerouslySetInnerHTML={{__html: excerpt}}></p>
      </div>
      <button id="showModal" aria-controls="modal" onClick={openModal}>Read More...</button>

      {modalOpen && (
        <Modal props={{title, titleLink, author, authorLink, date, content, closeModal}}/>
      )}

    </Cards>
  );
}

function Modal(props) {
  const {closeModal, title, titleLink, author, authorLink, content, excerpt, date} = props.props
return(
  <div class="p-modal" id="modal">
  <section class="p-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
    <header class="p-modal__header">
      <a href={titleLink}>
          <h2>{title}</h2>
        </a>
      <button class="p-modal__close" aria-label="Close active modal" aria-controls="modal" onClick={closeModal}>Close</button>
    </header>
    <div className="p-modal__content-container">
        <p className="p-modal__text" dangerouslySetInnerHTML={{__html: content}}></p>
      </div>
    <footer class="p-modal__footer">
      <p className="p-card__text authorDate">
        By <a href={authorLink}>{author}</a> on {date}
      </p>
    </footer>
  </section>
</div>
)
}

export default Card;
