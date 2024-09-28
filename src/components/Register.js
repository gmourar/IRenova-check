// src/components/Register.js
import React, { useState } from 'react'; // Importa o Firebase auth da configuração

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div>
      <h1>Registre-se</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default Register;
