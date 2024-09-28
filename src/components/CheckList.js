import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import axios from 'axios'



const CheckList = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [descriptions, setDescriptions] = useState({});
  const [userList , setUserList] = useState([])
  const [userNames , setUsernames] = useState(null)

  const ip = 'http://26.121.130.48:8080'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ip}/api/users `);
        console.log('Resposta recebida:', res.data);
        setUserList(res.data); 

        const usernames = res.data.map(user => user.username);
        setUsernames(usernames);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);  


  const checklistItems = [
    "Teclado",
    "Tapete",
    "Travesseiro",
    "Cama",
    "Computador",
    "Guarda-roupa",
    "Janela",
    "Mesa",
    "Monitor"
  ];

  const handleItemClick = (item, status) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [item]: status
    }));
  };

  const handleDescriptionChange = (item, text) => {
    setDescriptions(prevState => ({
      ...prevState,
      [item]: text
    }));
  };

  const handleSubmit = () => {
    const isConfirmed = window.confirm("Tem certeza que deseja enviar o checklist?");
    
    if (isConfirmed) {
     
      console.log('Itens selecionados:', selectedItems);
      console.log('Descrições:', descriptions);
      alert("Checklist enviado!");
    } else {
      
      alert("Envio cancelado.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '100%', maxWidth: '500px', height: '90vh' }} className="p-6 shadow-lg rounded">
        <Card.Header className="text-center bg-light text-dark rounded">
          <h4>Checklist do Quarto</h4>
      <h6>{userNames}</h6>
        </Card.Header>

        <Card.Body style={{ overflowY: 'auto' }}>
          {checklistItems.map((item, index) => (
            <div key={index} className="mb-2 p-4  rounded" style={{ backgroundColor: '#f8f9fa' }}>
              <Row className="align-items-center">
                <Col xs={6}>
                  <span className="fs-5 fw-semibold">{item}</span>
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-danger"
                    className={`rounded${selectedItems[item] === 'unchecked' ? 'border-danger bg-danger text-white' : ''}`}
                    style={{ width: '60px', height: '50px' }}
                    onClick={() => handleItemClick(item, 'unchecked')}
                  >
                    
                  </Button>
                </Col>
                <Col xs={2} className="text-center">
                  <Button
                    variant="outline-success"
                    className={`rounded ${selectedItems[item] === 'checked' ? 'border-success bg-success text-white' : ''}`}
                    style={{ width: '60px', height: '50px' }}
                    onClick={() => handleItemClick(item, 'checked')}
                  >
                    
                  </Button>
                </Col>
              </Row>

              {/* Mostrar campo de descrição se "unchecked" for selecionado */}
              {selectedItems[item] === 'unchecked' && (
                <Form.Group className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Descreva o motivo"
                    value={descriptions[item] || ''}
                    onChange={(e) => handleDescriptionChange(item, e.target.value)}
                    className="shadow-sm"
                  />
                </Form.Group>
              )}
            </div>
          ))}

          <Button
            variant="primary"
            className="w-100 mt-4 shadow-sm"
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CheckList;

