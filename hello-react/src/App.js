import './App.css';
import Hello from './Hello';
 
 
const helloWorld = "Hello World"
const userName = "Jack Viana"
 
function App() {
 
 return (
   <div className="App">
     <Hello  helloWorld={helloWorld}
             userName={userName}/>
   </div>
 )
}
 
export default App;


