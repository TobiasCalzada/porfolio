import "./Card.css"

function Card(props){

    return(
        <div className="card">
            <div className="face front">
                <img src={props.imagen} alt={props.descripciónimg} />
                <h3>{props.titulo}</h3>
            </div>
            <div className="face back">
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </div> 
    )
}

export default Card;