import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import '../assets/img_checklist.svg'; // Importando a imagem do topo
import '../css/Checklist.css'; // Importando o arquivo CSS

const CheckList = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [checklistItems, setChecklistItems] = useState([]); 
  const [title, setTitle] = useState('');
  
  const ip = 'http://26.121.130.48:8080';
  const check_id = 'cc21b860-db95-4386-b12c-285aeb756700';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`${ip}/api/checklists/${check_id}`);
  //       setTitle(res.data.title); 
  //       setChecklistItems(res.data.items); 
  //     } catch (error) {
  //       console.error('Erro ao buscar dados:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);  

  const handleItemClick = (itemId, status) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [itemId]: status
    }));
  };

  const handleSubmit = () => {
    const isConfirmed = window.confirm("Tem certeza que deseja enviar o checklist?");
    if (isConfirmed) {
      console.log('Itens selecionados:', selectedItems);
      alert("Checklist enviado!");
    } else {
      alert("Envio cancelado.");
    }
  };

  return (
    <Container className="checklist-container d-flex justify-content-center align-items-center vh-100">
      <Card className="checklist-card shadow-lg">
        {/* Imagem de topo */}
        <div className="checklist-header">
          <img src={require('../assets/img_checklist.svg').default} alt="Checklist header" className="checklist-image" />
        </div>

        {/* Título e subtítulo */}
        <Card.Header className="text-center bg-white checklist-titles">
          <h4 className="checklist-title">CHECKLIST</h4>
          <h5 className="checklist-subtitle">QUARTO</h5>
        </Card.Header>

        <Card.Body className="checklist-body">
          {checklistItems.map((item) => (
            <div key={item.id} className="checklist-item">
              <Row className="align-items-center">
                <Col xs={6}>
                  <span className="checklist-item-name">{item.name}</span>
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="light"
                    className={`checklist-btn ${selectedItems[item.id] === 'unchecked' ? 'btn-unchecked' : ''}`}
                    onClick={() => handleItemClick(item.id, 'unchecked')}
                  >
                    ✕
                  </Button>
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="light"
                    className={`checklist-btn ${selectedItems[item.id] === 'checked' ? 'btn-checked' : ''}`}
                    onClick={() => handleItemClick(item.id, 'checked')}
                  >
                    ✓
                  </Button>
                </Col>
              </Row>
            </div>
          ))}

          {/* Botão Enviar */}
          <Button variant="primary" className="checklist-submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </Card.Body>

        {/* Botão Sair */}
        <Card.Footer className="text-center checklist-footer">
          <Button variant="light" className="checklist-exit">
            Sair
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default CheckList;
