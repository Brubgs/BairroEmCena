import Logo from '../assets/images/Logo.png'
function Cabecalho(){
    return(
        <>  
            <div className="cabecalho">
                <img src={Logo} alt="Logo-BairroEmCena" width="7%"/>
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