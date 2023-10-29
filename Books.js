import React, { useState } from 'react';

import AWAT from '../Images/AWalkAlongTracks.jpg';
import BHAA from '../Images/BeenHereAllAlong.jpg';
import Bheth from '../Images/Bethlehem.jpg';
import Grouse from '../Images/Grouse.jpg';
import LionKing from '../Images/LionKing.jpg';
import Brave from '../Images/TheBrave.jpg';
import SmallOne from '../Images/TheSmallOne.jpg';
import Thirteen from '../Images/Thirteen.jpg';


const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('All');

  const cardData = [
    {
      imageUrl: AWAT,
      title: 'A Walk Along Tracks',
      text: 'Embark on a literary journey with this captivating tale of adventure and discovery.',
      genre: 'Adventure',
    },
    {
      imageUrl: BHAA,
      title: 'Been Here All Along',
      text: 'Explore the complexities of love and relationships in this heartwarming novel.',
      genre: 'Romance',
    },
    {
      imageUrl: Bheth,
      title: 'Bethlehem',
      text: 'Step into the historical past with this enchanting depiction of ancient times.',
      genre: 'Historical',
    },
    {
      imageUrl: Grouse,
      title: 'Grouse',
      text: 'Dive into the world of wildlife and nature with this beautifully illustrated book.',
      genre: 'Nature',
    },
    {
      imageUrl: LionKing,
      title: 'Lion King',
      text: 'Experience the circle of life in this timeless tale of courage and friendship.',
      genre: 'Fantasy',
    },
    {
      imageUrl: Brave,
      title: 'The Brave',
      text: 'Discover the courage within as the protagonist faces challenges in this story.',
      genre: 'Adventure',
    },
    {
      imageUrl: SmallOne,
      title: 'The Small One',
      text: 'Find joy in the little things as you join the protagonist on a heartwarming journey.',
      genre: 'Inspirational',
    },
    {
      imageUrl: Thirteen,
      title: 'Thirteen',
      text: 'Uncover the secrets and mysteries surrounding the number thirteen in this read.',
      genre: 'Mystery',
    },
  ];

  const filteredCards = cardData.filter(
    (card) =>
      (card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.text.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterGenre === 'All' || card.genre === filterGenre)
  );

  return (
    <div className="container mt-5 mb-4">
      <div className="border border-5 p-4 bg-warning-subtle">
        <div className="mb-4 text-center border border-5 border-black">
          <h1>BOOK SHELF</h1>
        </div>
        <div className="border border-4 p-3 bg-primary-subtle">
          <h2 className="mb-4 text-center">Find Available Books</h2>
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6  d-flex justify-content-center align-items-center ">
              <div className="input-group">
                <input
                  id="Search-bar"
                  type="text"
                  className="form-control"
                  placeholder="Search by title or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-outline-secondary bg-dark text-info"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="genreFilter" className="form-label">
                  Filter by Genre:
                </label>
                <select
                  id="genreFilter"
                  className="form-select"
                  value={filterGenre}
                  onChange={(e) => setFilterGenre(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Romance">Romance</option>
                  <option value="Historical">Historical</option>
                  <option value="Nature">Nature</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Inspirational">Inspirational</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-5 mt-3 p-5 bg-primary-subtle">
          <div className="row">
            {filteredCards.map((card, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card book-card">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="card-img-top"
                    style={{ height: '250px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <p className="card-text">Genre: {card.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;