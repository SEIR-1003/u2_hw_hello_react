function  Hello (props) {

    return (
        <div className="App">
                    <h2>Hello {props.names}!</h2>
                    <img className="Goatee" src={props.picture}/>
                    <img className="Eddie" src=""></img>

        </div>
    )
}

export default Hello