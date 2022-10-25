import Hello from "./Hello";
import "./App.css";

function App() {
  const helloWorld = "Hello World";
  const userName = "Justin";
  const names = [
    "Eddie Van Halen",
    "Jimmy Page",
    "Peter Townshend",
    "Jimi Hendrix",
    "George Harrison",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Hello userName={userName} names={names} />
      </header>
    </div>
  );
}

export default App;
