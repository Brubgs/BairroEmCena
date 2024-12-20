import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import Filme from '../assets/images/filmes/Cartola.jpg'
import { useNavigate } from 'react-router-dom';

function Cartola(){
    return(
        <>
            <Cabecalho/>
            <div className="containerFilme">
                <img src={Filme} alt="" className="imagemCartola" />
                <div className="infoFilme">
                    <h4>Cartola - Música para os olhos</h4>
                    <p>Conheça a história de vida e a obra de Angenor de Oliveira, mais conhecido como Cartola, grande ícone do samba e um dos mais importantes compositores da música popular brasileira.</p>
                    <h4>Classificação indicativa: 10 anos</h4>
                    <h4>Horários:</h4>
                    <p>Seg. a sex. às 13:00h</p>
                    <h4>Sala:  2</h4>
                    <button className="botaoComprar">Comprar ingresso</button>
                </div>
            </div>
            <Rodape/>
            
        </>
    )
}
export default Cartola