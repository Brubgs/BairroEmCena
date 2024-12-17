import LogoBairroEmCena from './assets/images/LogoBairroEmCena.jpg'
function Cabecalho(){
    return(
        <>  
            <div className="cabecalho">
                <img src={LogoBairroEmCena} alt="Logo-BairroEmCena" width="5%"/>
                <nav className="navegacao">
                    <a href="">Home</a>
                    <a href="">Login</a>
                    <a href="">Busca</a>
                </nav>
            </div>
        </>
    )
}
export default Cabecalho