import "./CertificadoCards.css"
import Card from "../Cards/Card";


function CertificadoCards(){

    return(
        <div className="padreDeCertificados">
            <h2>Certificados</h2>
            <div className="contenedorDeCertificados">
                <Card titulo="Japon" texto="hola soy un lorme desde props, ofjriijjrgrjig rkrrktojrvrvtrjojt vfjvivvjivirjimr" imagen="/Imagenes/img1.jpeg" descripciónimg="imagen de paisaje japones"></Card>
                <Card titulo="Japon" texto="hola soy un lorme desde props, ofjriijjrgrjig rkrrktojrvrvtrjojt vfjvivvjivirjimr" imagen="/Imagenes/img1.jpeg" descripciónimg="imagen de paisaje japones"></Card>
                <Card titulo="Japon" texto="hola soy un lorme desde props, ofjriijjrgrjig rkrrktojrvrvtrjojt vfjvivvjivirjimr" imagen="/Imagenes/img1.jpeg" descripciónimg="imagen de paisaje japones"></Card>
                <Card titulo="Japon" texto="hola soy un lorme desde props, ofjriijjrgrjig rkrrktojrvrvtrjojt vfjvivvjivirjimr" imagen="/Imagenes/img1.jpeg" descripciónimg="imagen de paisaje japones"></Card>
            </div>
        </div>
    );
}

export default CertificadoCards;