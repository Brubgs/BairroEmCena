import Cartola from '../assets/images/filmes/Cartola.jpg'
import Bacurau from '../assets/images/filmes/Bacurau.jpg'
import Betania from '../assets/images/filmes/Betania.jpg'

function Cards() {
    return (
        <>
        <div className="cards my-5">
            <div className="card" style={{ width: '18rem' }}>
                <img src={Cartola} className="card-img-top" alt="Cartaz do filme Cartola" />
                    <div className="card-body">
                        <h5 className="card-title">Cartola</h5>
                        <a href="#" className="botaoFilme btn btn-primary my-3">Ver filme</a>
                    </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={Bacurau} className="card-img-top" alt="Cartaz do filme Bacurau"/>
                    <div className="card-body">
                        <h5 className="card-title">Bacurau</h5>
                        <a href="#" className="botaoFilme btn btn-primary my-3">Ver filme</a>
                    </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={Betania} className="card-img-top" alt="Cartaz do filme Betania" />
                    <div className="card-body">
                        <h5 className="card-title">Betânia</h5>
                        <a href="#" className="botaoFilme btn btn-primary my-3">Ver filme</a>
                    </div>
            </div>
        </div>
            
        </>
    );
}

export default Cards;
