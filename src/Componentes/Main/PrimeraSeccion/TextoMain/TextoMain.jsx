import "./TextoMain.css"

function TextoMain(){

    return(
        <div className="contenedorDeTextoMain">
            <h1 className="encabezadoDeMain">Lorem ipsum dolor sit.</h1>
            <p className="textoDeMain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt quo provident harum rerum alias ipsum? Aspernatur, est similique voluptas nemo pariatur totam. Eaque facilis delectus, dignissimos sint unde veritatis.</p>
            <button class="button">
                <span class="button_lg">
                    <div class="button_sl"></div>
                    <div class="button_text">Download Now</div>
                </span>
            </button>
        </div>
    )
}

export default TextoMain;