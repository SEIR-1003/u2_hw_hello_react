export default function Hello (props) {
    return(
        <div className="artist">
            <h2>{props.artist.name}</h2>
            <h4>Born {props.artist.born}</h4>
        </div>
    )
}
