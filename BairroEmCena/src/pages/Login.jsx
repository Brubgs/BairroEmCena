import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
function Login(){
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
            <button className="botao">Entrar</button>
            <a href="">Não possui cadastro? Cadastre-se aqui</a>
        </div>
        <Rodape/>
        </>
    )
}
export default Login