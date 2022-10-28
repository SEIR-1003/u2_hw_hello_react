import Hello from './components/Hello'
import './App.css';

const App = (props) => {

  const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.greetings}</h1>
      </header>
      {
        names.map((name) => 
        <Hello key = {name}
      name = {name}/>
      )}
    </div>
  )
}

export default App;
