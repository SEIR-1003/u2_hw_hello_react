import './App.css';
import Hello from './hello.js'

function App() {
  
  const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

  return (
    <div className="App">
      <div>
        <Hello name={names[1]}/>
        <Hello name={names[0]}/>
        <Hello name={names[2]}/>
        <Hello name={names[3]}/>
        <Hello name={names[4]}/>
      </div>
    </div>
  );
}

export default App;
