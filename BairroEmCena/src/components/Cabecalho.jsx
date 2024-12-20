import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom';

function Cabecalho() {

  const navigate = useNavigate()

  function clicarLogin(){
    navigate('/login')
  }

  function home(){
    navigate('/')
  }

  function busca(){
    navigate('/busca')
  }

  return (
    <Navbar expand="lg" className='cabecalho'>
      <Container >
        <div>
            <img src={Logo} alt="" className='logo'/>
        </div>
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" onClick={home}>Home</Nav.Link>
                <Nav.Link href="#login" onClick={clicarLogin}>Login</Nav.Link>
                <Nav.Link href="#busca" onClick={busca}>Busca</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default Cabecalho;