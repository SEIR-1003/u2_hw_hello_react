import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

const names = [
  'Eddie Van Halen',
  'Jimi Hendrix', 
  'Wes Montgomery', 
  'Frank Zappa', 
  'John Mayer']

function App() {
  return (
    <div className="App">
      <Hello names={names}/>
    </div>
  );
}

export default App;
