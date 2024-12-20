import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useNavigate } from 'react-router-dom';

function Cadastro(){
    const navigate = useNavigate()

    function registrar(){
        navigate('/login')
    }
    return(
        <>
        <Cabecalho/>
        <div className="login">
            <h5>Cadastro</h5>
            <div className="form">
            <div className="campo">
                    <label htmlFor="">Nome</label>
                    <input type="text" />
                </div>
                <div className="campo">
                    <label htmlFor="">CPF</label>
                    <input type="text" />
                </div>
                <div className="campo">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="campo">
                    <label htmlFor="">Senha</label>
                    <input type="password" />
                </div>
            </div>
            <button className="botao" onClick={registrar}>Registrar</button>
        </div>
        <Rodape/>
        </>
    )
}
export default Cadastro