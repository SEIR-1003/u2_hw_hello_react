import './App.css';
import Hello from './Hello'
import Header from './Header'

function App() {

  const name = "Rowbear"
  const names = {
    eddie: {
      name: 'Eddie Van Halen',
      born: 'January 26, 1955'
    },
    jimmie: {
      name: 'Jimi Hendrix',
      born: 'November 27, 1942'
    },
    wes: {
      name: 'Wes Montgomery',
      born: 'March 6, 1923'
    },
    frank: {
      name: 'Frank Zappa',
      born: 'December 21, 1940'
    },
    john: {
      name: 'John Mayer',
      born: 'October 16, 1977'
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="musicians">
        <Hello artist={names.eddie}/>
        <Hello artist={names.jimmie}/>
        <Hello artist={names.wes}/>
        <Hello artist={names.frank}/>
        <Hello artist={names.john}/>
      </div>
    </div>
  );
}
export default App;
