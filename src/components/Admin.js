import React, { Component } from 'react';
import { Container, Navbar, Form, Nav, NavDropdown, Offcanvas, Button, Row, Col, Card, Table } from 'react-bootstrap';

export class Admin extends Component {
  render() {
    return (
      <>
        {/* Navbar */}
        <Navbar expand="sm" className="bg-body-tertiary m-2 rounded">
          <Container fluid>
            <Navbar.Brand href="#">CheckList Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm"
              aria-labelledby="offcanvasNavbarLabel-expand-sm"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-4">
                  <NavDropdown title="Opções" id="offcanvasNavbarDropdown-expand-sm">
                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Sair</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container fluid className="p-4">
          {/* Checklist Cards */}
          <Row className="mb-4">
            <Col sm={12} md={4} className="mb-3">
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' , borderColor: 'black', borderWidth: '3px' }}>
                <Card.Body>
                  <Card.Title>Checklist Quarto</Card.Title>
                  <Card.Text>
                    Gerenciar o checklist do quarto.
                  </Card.Text>
                  <Button variant="dark">Ver Checklist</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mb-3">
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' , borderColor: 'black', borderWidth: '3px' }}>
                <Card.Body>
                  <Card.Title>Checklist Sala</Card.Title>
                  <Card.Text>
                    Gerenciar o checklist da sala.
                  </Card.Text>
                  <Button variant="dark">Ver Checklist</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mb-3">
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' , borderColor: 'black', borderWidth: '3px' }}>
                <Card.Body>
                  <Card.Title>Checklist Cozinha</Card.Title>
                  <Card.Text>
                    Gerenciar o checklist da cozinha.
                  </Card.Text>
                  <Button variant="dark">Ver Checklist</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Styled Logs Table */}
          <h4 className="mb-4 text-center">Tabela de Logs</h4>
          <Table responsive striped bordered hover className="table-rounded shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <thead className="table-dark">
              <tr>
                <th>Usuário</th>
                <th>Checklist</th>
                <th>Local</th>
                <th>Data de Conclusão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matheus</td>
                <td>Checklist Quarto</td>
                <td>Quarto</td>
                <td>2024-09-27</td>
              </tr>
              <tr>
                <td>Gabriel</td>
                <td>Checklist Sala</td>
                <td>Sala</td>
                <td>2024-09-26</td>
              </tr>
              <tr>
                <td>Heitor</td>
                <td>Checklist Cozinha</td>
                <td>Cozinha</td>
                <td>2024-09-25</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default Admin;
