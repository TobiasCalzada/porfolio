import "./PaginasWeb.css";
import CardsPagina from "../CardsPaginas/CardsPagina";

function PaginasWeb(){

    return(
        <div>
            <h2 className="tituloDePaginas">Proyectos</h2>
            <div className="contenedorCardsPaginas">
                <CardsPagina imagen="/Imagenes/img1.jpeg" titulo="hola" descripcion="lorem eprkj0rfr9hirhv9trnr f0vrhjv9iv9vj f0vjfvff" alt="alt de imagen" link="https://www.youtube.com/"></CardsPagina>
                <CardsPagina imagen="/Imagenes/img1.jpeg" titulo="hola" descripcion="lorem eprkj0rfr9hirhv9trnr f0vrhjv9iv9vj f0vjfvff" alt="alt de imagen"></CardsPagina>
                <CardsPagina imagen="/Imagenes/img1.jpeg" titulo="hola" descripcion="lorem eprkj0rfr9hirhv9trnr f0vrhjv9iv9vj f0vjfvff" alt="alt de imagen"></CardsPagina>
                <CardsPagina imagen="/Imagenes/img1.jpeg" titulo="hola" descripcion="lorem eprkj0rfr9hirhv9trnr f0vrhjv9iv9vj f0vjfvff" alt="alt de imagen"></CardsPagina>
            </div>
        </div>
    );
}


export default PaginasWeb;