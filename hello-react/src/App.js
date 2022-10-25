import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
function App() {
  const name= "Alvin"
  const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']
  return (
   <div>
    <Hello name={name}
            names={names}/>
   </div>
  );
}

export default App;
