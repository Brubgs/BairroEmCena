import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import Esconjuro from '../assets/images/Esconjuro.png';
import { useNavigate } from 'react-router-dom';

function CompraEvento(){
    return(
        <>
            <Cabecalho/>
            <div className="containerEvento">
                <img src={Esconjuro} alt="" className="imagemEvento" />
                <div className="infoEvento">
                    <h4>Esconjuro - Paulo Nazareth</h4>
                    <p>A exposição Esconjuro (2024), de Paulo Nazareth, estreia no Inhotim em 13/04, ocupando a Galeria Praça e outros espaços por 18 meses, divididos em quatro estações: outono e primavera de 2024, verão e inverno de 2025. A mostra explora relações entre história, território e deslocamentos, abordando práticas de exploração e disputa, além de formas de conexão com a terra e seus ciclos. Com uma linguagem diversa — de pinturas a instalações —, as obras são constantemente trocadas e reposicionadas, promovendo um gesto de reinvenção. O projeto conta com apoio da Vale e Shell, via Lei Federal de Incentivo à Cultura.</p>
                    <div>
                        <h4>Horários:</h4>
                        <p>Sábado, 13/04/2024 - 10:00 a Terça, 31/12/2024 - 00:00</p>
                    </div>
                    <div>
                        <h4>Localização:</h4>
                        <p>Inhotim - Brumadinho</p>
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
                    <button className="botaoComprar">Concluir Compra</button>
                </div>
            </div>
            <Rodape/>
        </>        
    )
}
export default CompraEvento