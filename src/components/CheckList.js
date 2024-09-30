import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import axios from 'axios';

const CheckList = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [descriptions, setDescriptions] = useState({});
  const [checklistItems, setChecklistItems] = useState([]); 
  const [title, setTitle] = useState('');
  
  const ip = 'http://26.121.130.48:8080';
  const check_id = 'cc21b860-db95-4386-b12c-285aeb756700'


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ip}/api/checklists/${check_id}`);
        console.log('Resposta recebida:', res.data);
        
        setTitle(res.data.title); 
        setChecklistItems(res.data.items); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);  

  const handleItemClick = (itemId, status) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [itemId]: status
    }));
  };

  const handleDescriptionChange = (itemId, text) => {
    setDescriptions(prevState => ({
      ...prevState,
      [itemId]: text
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
          <h4>{title}</h4> 
        </Card.Header>

        <Card.Body style={{ overflowY: 'auto' }}>
          {checklistItems.map((item, index) => (
            <div key={item.id} className="mb-2 p-4  rounded" style={{ backgroundColor: '#f8f9fa' }}>
              <Row className="align-items-center">
                <Col xs={6}>
                  <span className="fs-5 fw-semibold">{item.name}</span> 
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-danger"
                    className={`rounded${selectedItems[item.id] === 'unchecked' ? 'border-danger bg-danger text-white' : ''}`}
                    style={{ width: '60px', height: '50px' }}
                    onClick={() => handleItemClick(item.id, 'unchecked')}
                  >
                    
                  </Button>
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-success"
                    className={`rounded ${selectedItems[item.id] === 'checked' ? 'border-success bg-success text-white' : ''}`}
                    style={{ width: '60px', height: '50px' }}
                    onClick={() => handleItemClick(item.id, 'checked')}
                  >
                   
                  </Button>
                </Col>
              </Row>

              
              {selectedItems[item.id] === 'unchecked' && (
                <Form.Group className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Descreva o motivo"
                    value={descriptions[item.id] || ''}
                    onChange={(e) => handleDescriptionChange(item.id, e.target.value)}
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
