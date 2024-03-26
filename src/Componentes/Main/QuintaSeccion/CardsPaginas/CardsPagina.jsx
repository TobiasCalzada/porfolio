import "./CardsPagina.css"

function CardsPagina(props){

    return(
    <div id="cardArea">
        <div className="Wrapper">
                <div className="box">
                    <img src={props.imagen} alt={props.alt} />
                    <div className="overlay">
                        <h3>{props.titulo}</h3>
                        <p>{props.descripcion}</p>
                        <a href={props.link}>link</a>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default CardsPagina;