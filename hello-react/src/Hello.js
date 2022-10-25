function Hello (props) {
    return(
        <div className='profile'>
            <h1 className="intro">Introducing {props.name}!</h1>
            <img className="profilePic" src={props.image} alt='profile-pic'/>
            <p className='blurb'>Born {props.dob}, he is most well-known for playing a {props.guitar}.</p>
        </div>
    )
}

export default Hello