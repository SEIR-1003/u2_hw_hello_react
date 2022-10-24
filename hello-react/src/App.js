import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const firstName = "Ryan";
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div>
            <Hello firstName={firstName} />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
