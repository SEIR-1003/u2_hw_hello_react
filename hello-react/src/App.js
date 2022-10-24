import Hello from './Hello';
import './App.css';

function App() {

  const firstName = "Imdad"
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName={firstName}/>
      </header>
    </div>
  );
}

export default App;
