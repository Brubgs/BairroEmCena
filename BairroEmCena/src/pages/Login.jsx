import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate()

    function cadastro(){
        navigate('/cadastro')
    }
    function login(){
        navigate('/')
    }
    return(
        <>
        <Cabecalho/>
        <div className="login">
            <h5>Login</h5>
            <div className="form">
                <div className="campo">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="campo">
                    <label htmlFor="">Senha</label>
                    <input type="text" />
                </div>
            </div>
            <button className="botao" onClick={login}>Entrar</button>
            <a href="" onClick={cadastro}>Não possui cadastro? Cadastre-se aqui</a>
        </div>
        <Rodape/>
        </>
    )
}
export default Login