import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import '../css/Login.css'; 
import loginImg from '../assets/img_login.svg';

const Login = () => {
  const [pwd, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const navigate = useNavigate();
  const [auth, setAuth] = useState('');
  const urLogin = 'http://26.121.130.48:8080/api/auth/authenticate';

  const handleLogin = async () => {
    try {
      const response = await axios.post(urLogin, {
        username: userName,
        pwd: pwd,
      });

      const { messages } = response.data;
      setAuth(messages);

      navigate('/checklist');
    } catch (error) {
      console.error(error);
      alert('Usuário e/ou senha inválidos.');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow custom-card">
        <Card.Body className="text-center">
          <img src={loginImg} alt="Login" className="login-img mb-4" />
          <h3 className="mb-4">Bem-vindo</h3>
          <p className="text-muted mb-4">
            Digite seu nome de usuário e sua senha para continuar.
          </p>

          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome usuário"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Senha"
                value={pwd}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>

            <Button
              className="btn-login w-100 mt-3 rounded-pill"
              onClick={handleLogin}
            >
              Acessar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
