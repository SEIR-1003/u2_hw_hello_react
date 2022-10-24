import './App.css';
import Hello from './Hello';

const name = 'Walter Thomas'

const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

function App() {
  return (
    <div className="App">
      <div className="hello-comp">
        <Hello name={name}/>
      </div>
      <div className='namesArray'>
        <Hello names={names[0]}/>
        <Hello names={names[1]}/>
        <Hello names={names[2]}/>
        <Hello names={names[3]}/>
        <Hello names={names[4]}/>
      </div>
    </div>
  );
}

export default App;
