import Carrosel from './Carrossel.jsx'
import Cards from './Cards.jsx'

function Home(){
    return(
        <>
            <div className="Home">
                <div className="eventos">
                    <h3>Eventos</h3>
                    <Carrosel/>
                </div>
                <div className="cartaz">
                    <h3>Em cartaz</h3>
                    <Cards/>
                </div>
            </div>
        </>
    )
}
export default Home