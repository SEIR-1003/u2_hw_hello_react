
import './App.css';
import Hello from './Hello';

function App() {

  const rockstars = [
                {name: 'Eddie Van Halen', 
                dob: 'January 26 1955',
                guitar: 'Self-built Frankenstrat',
                image: 'https://static01.nyt.com/images/2020/10/07/obituaries/07vanhalen1/06vanhalen1-mediumSquareAt3X.jpg'
                },   
                {name: 'Jimi Hendrix', 
                dob: 'November 27, 1942',
                guitar: 'Fender Stratocaster',
                image: 'https://neuguitars.files.wordpress.com/2017/10/rs-136467-2b1d08ea01d2714a82785574e1434b4dcbecbc53.jpg'
                },
                {name: 'Wes Montgomery',
                dob: 'March 6,1923',
                guitar: 'Gibson L5-CES',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Wes_Montgomery_%281967_Gibson_portrait%29.jpg'
                },
                {name: 'Frank Zappa', 
                dob: 'December 21, 1940',
                guitar: '"Baby Snakes" SG',
                image: 'https://i.pinimg.com/originals/37/4b/d5/374bd57bb38eb70165fdc3bf9e15925b.jpg'
                },
                {name: 'John Mayer',
                dob: 'October 16, 1977',
                guitar: 'Martin OM28-JM',
                image: 'https://guitar.com/wp-content/uploads/2020/06/GM383-blues-John-Mayer-Credit-Getty-Images@1400x1050.jpg'
                    }]

  
    return <div className="App">
      <ul>
        {
          rockstars.map((person)=>(
            <Hello key={person.name} 
                  name={person.name}
                  dob={person.dob}
                  guitar={person.guitar}
                  image={person.image} />

          ))
        }
      </ul>
    </div>
  
}

export default App;
