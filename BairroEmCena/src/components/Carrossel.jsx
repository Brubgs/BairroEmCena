import Kilomba from '../assets/images/Kilomba.png';
import Esconjuro from '../assets/images/Esconjuro.png';
import Mutirao from '../assets/images/Mutirao.jpg';

function Carrosel() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Kilomba} className="d-block w-50 mx-auto" alt="Slide 1" />
                        <p className="my-3">Exposição: "O Barco" de Grada Kilomba</p>
                    </div>
                    <div className="carousel-item">
                        <img src={Esconjuro} className="d-block w-50 mx-auto" alt="Slide 2" />
                        <p className="my-3">Esconjuro - Paulo Nazareth</p>
                    </div>
                    <div className="carousel-item">
                        <img src={Mutirao} className="d-block w-50 mx-auto" alt="Slide 3" />
                        <p className="my-3">Mostra: Desvios – Mutirão</p>
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
