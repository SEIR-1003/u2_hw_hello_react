import './App.css';
import Hello from './Hello'

function App() {

  const theName = 'Andrew'
  const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

  let list = []
  names.forEach((name) => {
    list.push(<Hello name={name} className='press' key={name}/>)
  })

  return (
    <div className="App">
      <Hello name={theName} />
      <Hello name={names[0]} />
      {names.map((name) => {
        return <Hello name={name} className='antic' key={name}/>
      })}
      {list}
    </div>
  );
}

export default App;
