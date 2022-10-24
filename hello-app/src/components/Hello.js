export default function Hello(prop){
  return (
  <div className="person">
    <img src={prop.person.img}/>
    <div className="info">
    <h2>{prop.person.firstName} {prop.person.lastName}</h2>
    <h3>{prop.person.title}</h3>
    <a href={"mailto:"+prop.person.email}>Contact {prop.person.firstName}</a>
    </div>
  </div>
  )
}