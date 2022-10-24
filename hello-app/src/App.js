import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [people] = useState(
    [
      {
        firstName:"Jeremy",
        lastName:"Taubman",
        title:"Instructor",
        email:"jeremy.taubman@generalassemb.ly",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQH0b5LPKi6kCg/profile-displayphoto-shrink_800_800/0/1585230650056?e=1672272000&v=beta&t=JrXXCOuYr4RgE88_LgmzFgeYsOZew2acwAarmMfmwYg"
      },
      {
        firstName:"Brittany",
        lastName:"Morataya",
        title:"Instructional Associate",
        email:"bills.morataya@gmail.com",
        img:"https://media-exp1.licdn.com/dms/image/C5603AQEiPyCI3g3NJw/profile-displayphoto-shrink_800_800/0/1617042246725?e=1672272000&v=beta&t=Q8j8agvwH1w4npPt3Lj7boh545T6ReaNoSbyHqwW9fY"
      },
      {
        firstName:"Tiffany",
        lastName:"Pereira",
        title:"Instructional Associate",
        email:"tiffanympereira@gmail.com",
        img: "https://media-exp1.licdn.com/dms/image/D4E03AQHu0dwcbHZIxA/profile-displayphoto-shrink_800_800/0/1664305726391?e=1672272000&v=beta&t=Or7Jrn5VcNT6-yIAYhg0avNp9jEaoLAyOnsQsFCTuX8"
      },
      {
        firstName:"Kristina",
        lastName:"VanBergen-DeSilva",
        title:"Teaching Assistant",
        email:"kristina.vanbergen-desilva@generalassemb.ly",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQHBYR6mbqtpFw/profile-displayphoto-shrink_800_800/0/1661886284791?e=1672272000&v=beta&t=-HWZ8vz7fAi8775RhX3tt0x9z68ZJ4-yiH-KT3Drlm8"
      },
      {
        firstName:"Tylus",
        lastName:"Dawkins",
        title:"Teaching Assistant",
        email:"tylus.dawkins@generalassemb.ly",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEOYGBF5kPSyA/profile-displayphoto-shrink_800_800/0/1651512931693?e=1672272000&v=beta&t=Wpex0wAVthjEHWZQwmZPYCUGLnRotBo2M-hTG2OayzE"
      },
      {
        firstName:"Tommy",
        lastName:"Peterson",
        title:"Career Coach",
        email:"tommy.peterson@generalassemb.ly",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQF9V1fcBD0XLw/profile-displayphoto-shrink_800_800/0/1548463670217?e=1672272000&v=beta&t=ihdU4wujHeGZHXoqsav5ZsV6prO1BZPXEjx1HdCWo28"
      }
      
    ]
  )
  return (
    <div className="App">
      <Header/>
      <main>
      {people.map((person)=>{
        return (<Hello person={person}/>)
      })}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
