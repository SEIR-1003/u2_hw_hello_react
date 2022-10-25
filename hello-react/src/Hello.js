export default function Hello (props){
    return(
        <div>
        <h1> {props.name}</h1>
        <h2> Hello {props.names[0]}</h2>
        <h2> Hi {props.names[1]}</h2>
        <h2> Whatsup {props.names[2]}</h2>
        <h2> Who are you {props.names[3]}</h2>
        <h2> Um... {props.names[4]}</h2>
        </div>
    )
}