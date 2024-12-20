import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useNavigate } from 'react-router-dom';
import Filme from '../assets/images/CartolaB.jpg'
import Esconjuro from '../assets/images/Esconjuro.png';

function Busca(){
    const navigate = useNavigate()

    function saberMais(){
        navigate('/cartola')
    }
    return(
        <>
            <Cabecalho/>
            <div className="pesquisa">
                <input type="text" placeholder="Digite aqui"/>
                <button className="botaoPesquisar">Pesquisar</button>
            </div>
            <div className="filmes">
                <div className="cointainerInfo">
                    <img src={Filme} alt="" className="imagemCartola" />
                    <div className="infoFilme">
                        <h4>Cartola - Música para os olhos</h4>
                        <p>Conheça a história de vida e a obra de Angenor de Oliveira, mais conhecido como Cartola, grande ícone do samba e um dos mais importantes compositores da música popular brasileira.</p>
                        <button className="botaoSabermais" onClick={saberMais}>Saber mais</button>
                    </div>
                </div>
                
                <div className="cointainerInfo">
                    <img src={Esconjuro} alt="" className="imagemCartola" />
                    <div className="infoFilme">
                        <h4>Esconjuro - Paulo Nazareth</h4>
                        <p>Partindo das relações entre história, território e deslocamentos, Paulo Nazareth traz ao Inhotim a exposição Esconjuro (2024). 
                        A partir do dia 13/04, a Galeria Praça e outros pontos do Inhotim serão ocupados pelo artista ao longo de 18 meses, divididos em quatro estações: outono e primavera em 2024 e verão e inverno no ano de 2025, afirmando a mostra como presença viva e dinâmica. </p>
                        <button className="botaoSabermais">Saber mais</button>
                    </div>
                </div>
            </div>
            <Rodape/>
        </>
    )
}
export default Busca