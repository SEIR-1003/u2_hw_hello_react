import './App.css';
import Hello from './Hello';

const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer', 'Charizard', 'Blastoise', 'Venasaur']


function App() {
  return (
    <div className="App">
      <Hello userName ={names}/>
    </div>
  );
}

export default App;
