import './App.css';
import Hello from './Hello';


function App() {
  const helloWorld = "Hello World";
  const userName = "Greg";

  return (
    <div className="App">
      <Hello helloWorld={helloWorld}
              userName={userName}/>
     
    </div>
  );
}

export default App;
