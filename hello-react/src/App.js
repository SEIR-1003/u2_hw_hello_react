import Hello from './Hello'
import './App.css';

const myName = "Brandon"

const names = ['Cyclops', 'Jean Grey', 'Professor X', 'Magneto', 'Wolverine']

const listOfNames = names.map( (name) => {
  return (
    <h1>
      Hello {name}
    </h1>
  )
  }
)

function App() {
  return (
    <Hello
    listOfNames = {listOfNames}
    />
  );
}

export default App;
