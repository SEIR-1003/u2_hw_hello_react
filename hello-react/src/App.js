// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer',
]
const JimiH = {
  picture: "https://i.pinimg.com/originals/17/ba/be/17babe70a9e506cca56aef739ee39187.jpg"
}
const EVH = {
  picture: "https://www.nj.com/resizer/fwBppj5y5zwnP4-Gtg1HmRLbHeY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/X7WUFKJV7VG2TNDQQEVKBM4BPA.jpeg"
}



function App() {


  return (
    <div className="App">
      <header>
        <h1>Guitar Legends</h1>
      </header>
      <main>
    
      <div className="EVH">
      <Hello names={names[0]}
      picture={EVH.picture}/>
      </div>

      <div className="Goat">
        <Hello names={names[1]}
        picture={JimiH.picture}/>
      </div>

      <div className="WM">
        <Hello names={names[2]}/>
      </div>

      <div className="FZ">
        <Hello names={names[3]}/>
      </div>

      <div className="JM">
        <Hello names={names[4]}/>
      </div>
      </main>
    </div>
    
  );
}

export default App;
