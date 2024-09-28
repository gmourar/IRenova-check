import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();
  const [userName , setUsername] = useState('')
  const urLogin = 'http://26.121.130.48:8080/users/login'

  const handleLogin =  async () => {
    console.log('Login efetuado com:', userName, pwd);
    try {
      const fetch = axios.post(urLogin , {userName , pwd});
      const {auth , user , id_user} = fetch.data; // retorno do post login 
      setUsername(user)
      navigate('/quarto');
    
    } catch (error){
      console.log(error)
      alert('Usuário e/ou senha inválidos.')
    }
    

  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <Card.Body>

          <h5 className="text-center mb-4">Bem-vindo</h5>
          <p className="text-center text-muted">Faça login para continuar!</p>

          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Usuário</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Insira seu usuário"
                value={userName}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Insira sua senha"
                value={pwd}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>

            <Button 
              variant="primary" 
              className="w-100 mt-3" 
              onClick={handleLogin}
            >
              Login
            </Button>

            <Button 
              variant="link" 
              className="w-100 mt-3 text-center" 
              onClick={handleRegister}
            >
              Registre-se
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
