export default function Hello (props) {
    return (
        <h1 className={props.className || 'alegreya'} key={props.keys}>Hello {props.name}</h1>
    )
}