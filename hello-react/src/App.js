import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

const book = [
  {title: "A Whole Life: A Novel", author: "Robert Seethaler", published: "2014 - German Edition", pages: "161", cover:"https://m.media-amazon.com/images/I/51Tj+KxemTL._SX331_BO1,204,203,200_.jpg"},
  {title: "A Clue to the Exit: A Novel", author: "Edward St. Aubyn", published: "2000", pages: "206", cover:"https://m.media-amazon.com/images/I/51a7RQFcfGL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"},
  {title: "The Diving-Bell & the Butterfly: A Memoir of Life in Death", author: "Jean-Dominique Bauby", published: "1997 - French edition", pages: "146", cover:"https://m.media-amazon.com/images/I/41KrcKG0XdL._SX322_BO1,204,203,200_.jpg"},
  {title: "Bel Canto: A Novel", author: "Ann Patchett", published: "2001", pages: "318", cover:"https://m.media-amazon.com/images/I/41OjLP66qsL._SX330_BO1,204,203,200_.jpg"},
  {title: "We Have Always Lived in a Castle", author: "Shirley Jackson", published: "1962", pages: "214", cover:"https://m.media-amazon.com/images/I/51UYyL+a7mL._SY344_BO1,204,203,200_.jpg"},
  {title: "Whereabouts: A Novel", author: "Jhumpa Lahiri", published: "2018", pages: "163", cover:"https://m.media-amazon.com/images/I/312g4BujXnL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"},
  {title: "Remains of the Day", author: "Kazuo Ishiguro", published: "1989", pages: "258"}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Recommended Reads</h1>
        <p id="subtitle"> Books I read in 2022 </p>
      </header>
      
      <div className="books-container"> 

        <Hello book={book[0]}/>
        <Hello book={book[1]}/>
        <Hello book={book[2]}/>
        <Hello book={book[3]}/>
        <Hello book={book[4]}/>
        <Hello book={book[5]}/>

      </div>
    </div>
  );
}

export default App;
