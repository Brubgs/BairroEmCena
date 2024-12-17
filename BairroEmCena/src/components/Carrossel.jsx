import ExemploFoto from '../assets/images/ExemploFoto.png';
import ArteBotanica from '../assets/images/ArteBotanica.png';
import Esconjuro from '../assets/images/Esconjuro.png';
import Babel from '../assets/images/Babel.jpg';
function Carrosel() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ArteBotanica} className="d-block mx-auto" alt="Slide 1" />
                        <p className="my-3">Exposição Arte Botânica</p>
                    </div>
                    <div className="carousel-item">
                        <img src={Esconjuro} className="d-block mx-auto" alt="Slide 2" />
                        <p className="my-3">Esconjuro - Paulo Nazareth</p>
                    </div>
                    <div className="carousel-item">
                        <img src={Babel} className="d-block w-50 mx-auto" alt="Slide 3" />
                        <p className="my-3">Exposição: Babel</p>
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    );
}

export default Carrosel;
