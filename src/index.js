
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
   title: 'Wings Of Fire',
   imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg",
  //  imageUrl:  require('./images/Wings of fire.jpg'),
   link: 'https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)'
  },
  {
    title: 'Turning Points',
    imageUrl: "https://img1.od-cdn.com/ImageType-400/0293-1/199/89D/AA/%7B19989DAA-A267-4C4A-8552-430DEDADA63C%7DImg400.jpg",
    // imageUrl:  require('./images/Turning points.jpg'),
    link: 'https://www.amazon.in/Turning-Points-Journey-Challanges-Challenges/dp/9350293471'
  },
  {
    title: 'Story Of Experiments With Truth',
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630508191i/58905550.jpg",
    // imageUrl: require('./images/Story of Experiments with truth.jpg'),
    link: 'https://www.amazon.in/Mahatma-Gandhi-Autobiography-Story-Experiments/dp/8172343116'
  },
  {
    title: 'Ignited Minds',
    imageUrl: "https://m.media-amazon.com/images/I/41PdNvODHwL.jpg",
    // imageUrl: require('./images/Ignited Minds.jpg'),
    link: 'https://www.amazon.in/Ignited-Minds-Unleashing-power-within/dp/0143424122'
  },
  {
    title: 'Forge Your Future',
    imageUrl: "https://m.media-amazon.com/images/I/61dDnR4QF+L._AC_UF1000,1000_QL80_.jpg",
    // imageUrl: require('./images/forge your future1.jpg'),
    link: 'https://www.amazon.in/Forge-Future-P-J-Abdul-Kalam/dp/9350642794'
  }
];
 
const BookList = () => (
  <div>
    <h1>My Favorite Books</h1>
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book">
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
);

ReactDOM.render(<BookList />, document.getElementById('root'));









