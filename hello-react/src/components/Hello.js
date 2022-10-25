export default function Hello (props) {
    return (
        <div className="book-box">

            <h3 className="book-title"> {props.book.title} </h3>

            <div className="book-data">

                <p id="author"> By: {props.book.author} </p>
                <p> 1st Released: {props.book.published}</p>
                <p> Page Count: {props.book.pages} </p>
                <img src={props.book.cover} />

            </div>
        </div>
    )
}