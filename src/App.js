import './App.css';
import ProfilTrenera from './components/ProfilTrenera/ProfilTrenera'
import { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar bg="primary" expand="lg" > {/*TODO made navbar as separated component*/}
          <Container>
              <Navbar.Brand href="#home">Walk-a-dog</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#home">Profil Trenera</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>


        <ProfilTrenera/>
      </div>
    );
  };
}

export default App;
