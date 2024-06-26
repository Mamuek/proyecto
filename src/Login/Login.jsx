import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-top: 20%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      const user = {nombre: username, tipo: "admin"};
      axios.post("http://localhost:3000/users", user);
      alert('¡Bienvenido, administrador!');
      onLoginSuccess();
    } else {
      setAttemptCount(attemptCount + 1);
      if (attemptCount === 1) {
        const user = {nombre: "unknow", tipo: "ladron"}
        alert('¡Intentos agotados! ¡Es un ladrón!');
        axios.post("http://localhost:3000/users", user);
      } else {
        alert('Usuario o contraseña incorrectos. Intento ' + (attemptCount + 1));
      }
    }
  };

  return (
    <Container>
      <Title>Iniciar Sesión</Title>
      <Form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <Label>
          Usuario:
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Label>
        <Label>
          Contraseña:
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Button type="submit">Iniciar Sesión</Button>
      </Form>
    </Container>
  );
};

export default Login;
