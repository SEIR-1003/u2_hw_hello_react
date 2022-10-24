export default function Hello (props) {
    console.log(props.listOfNames)

    return (
        <div>
            <h1>{props.listOfNames}</h1>
        </div>
    )
}