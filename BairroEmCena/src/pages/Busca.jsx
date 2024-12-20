import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useNavigate } from 'react-router-dom';

function Busca(){
    return(
        <>
            <Cabecalho/>
            <h1>Essa será a página de busca</h1>
        </>
    )
}
export default Busca