import "./Tecnologias.css"
import CardsTec from "../CardsTecnologia/CardsTec";

function Tecnologias(){

    return(
        <div className="ContenedorTec">
            <section className="textoDeTecnologia">
                <p className="textoTecnologias">Tecnologias</p>
                <h1 className="tituloTecnologias">Tecnologias Aprendidas</h1>
                <p className="infoTecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, possimus illum. Rerum a obcaecati architecto cupiditate optio illum pariatur at recusandae magnam, voluptates</p>
            </section>
            <section className="cardsDeTecnologia">
                <CardsTec titulo="HTML" icono="fa-brands fa-html5" texto="lenguaje de programacion" id="html"></CardsTec>
                <CardsTec titulo="HTML" icono="fa-brands fa-html5" texto="lenguaje de programacion"></CardsTec>
                <CardsTec titulo="HTML" icono="fa-brands fa-html5" texto="lenguaje de programacion"></CardsTec>
                <CardsTec titulo="HTML" icono="fa-brands fa-html5" texto="lenguaje de programacion"></CardsTec>
            </section>
        </div>
    );
}

export default Tecnologias;