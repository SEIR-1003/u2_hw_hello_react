import './App.css';
import Hello from './Hello';

const name = "Matt"
const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={name}/>
      </header>
    </div>
  );
}

export default App;
