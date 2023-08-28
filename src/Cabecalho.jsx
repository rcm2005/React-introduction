import {} from "react"
import Imagem from './assets/Fotodoomi.avif'

function Cabecalho(){

        const aluno = "Welington";
        const curso = "engenharia";

        return(

        <>
        <h1>cabeçalho</h1>
        <p>{curso}</p>
        <p>{aluno}</p>
        <img src={Imagem} alt="N DEU" />

        
        
        </>
    )
}


export default Cabecalho

