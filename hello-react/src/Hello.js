export default function Hello (props) {
    return(
    <div className="hello">
        <ul>
        <li><h1>{props.names[0]}</h1></li>
        <li><h1>{props.names[1]}</h1></li>
        <li><h1>{props.names[2]}</h1></li>
        <li><h1>{props.names[3]}</h1></li>
        <li><h1>{props.names[4]}</h1></li>
        </ul>
      
    </div>
    )
}

