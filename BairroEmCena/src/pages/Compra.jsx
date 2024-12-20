import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import Filme from '../assets/images/filmes/Cartola.jpg'
import { useNavigate } from 'react-router-dom';

function Compra(){
    return(
        <>
            <Cabecalho/>
            <div className="containerFilme">
                <img src={Filme} alt="" className="imagemCartola" />
                <div className="infoFilme">
                    <h4>Cartola - Música para os olhos</h4>
                    <p>Conheça a história de vida e a obra de Angenor de Oliveira, mais conhecido como Cartola, grande ícone do samba e um dos mais importantes compositores da música popular brasileira.</p>
                    <div>
                        <h4>Horários:</h4>
                        <p>Seg. a sex. às 13:00h</p>
                    </div>
                    <div className="seletor">
                        <h4>Forma de pagamento:</h4>
                        <select>
                            <option>Cartão</option>
                            <option value="">Pix</option>
                        </select>
                    </div>
                    <div className="seletor">
                        <h4>Selecione o dia</h4>
                        <select>
                            <option>Segunda</option>
                            <option>Terça</option>
                            <option>Quarta</option>
                            <option>Quinta</option>
                            <option>Sexta</option>
                        </select>
                    </div>
                    <button className="botaoComprar">Concluir compra</button>
                </div>
            </div>
            <Rodape/>
        </>
    )
}
export default Compra