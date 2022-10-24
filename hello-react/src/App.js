import Hello from "./Hello";
import "./App.css";

function App() {
  const helloWorld = "Hello World";
  const userName = "Justin";

  return (
    <div className="App">
      <header className="App-header">
        <Hello userName={userName} />
      </header>
    </div>
  );
}

export default App;
