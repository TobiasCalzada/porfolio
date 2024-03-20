import "./Main.css"
import TextoMain from "./PrimeraSeccion/TextoMain/TextoMain";
import ImgMain from "./PrimeraSeccion/ImgMain/ImgMain";
import CertificadoCards from "./SegundaSeccion/CertificadoCards/CertificadosCards";
import AcercaDeMi from "./TerceraSeccion/AcercaDeMi/AcercaDeMi";

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
            <div className="seccion3">
                <AcercaDeMi></AcercaDeMi>
            </div>
        </div>
    )
}

export default Main;