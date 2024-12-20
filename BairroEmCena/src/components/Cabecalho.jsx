import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Logo.png'

function Cabecalho() {
  return (
    <Navbar expand="lg">
      <Container >
        <div>
            <img src={Logo} alt="" className='logo'/>
        </div>
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#busca">Busca</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default Cabecalho;