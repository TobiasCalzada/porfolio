import "./Main.css"
import TextoMain from "./PrimeraSeccion/TextoMain/TextoMain";
import ImgMain from "./PrimeraSeccion/ImgMain/ImgMain";
import CertificadoCards from "./SegundaSeccion/CertificadoCards/CertificadosCards";

function Main(){

    return(
        <div className="contenedorDeMain">
            <div className="seccion1">
                <TextoMain></TextoMain>
                <ImgMain></ImgMain>
            </div>
            <div className="seccion2">
                <CertificadoCards></CertificadoCards>
            </div>
        </div>
    )
}

export default Main;