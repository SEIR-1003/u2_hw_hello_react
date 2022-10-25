import Hello from './Hello';
import './App.css';



function App() {
  const name = ["Link", "Zelda", "Ganondorf", "Navi"];
  return (
    <div className="App">
      
      <Hello name={name}/>
    </div>
  );
}

export default App;
