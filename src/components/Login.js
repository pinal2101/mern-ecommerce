import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    // Save a fake token in localStorage
    localStorage.setItem('token', btoa(`${username}:${password}`));

    // Redirect to Home after login
    navigate('/home');
  };

  return (
    <form onSubmit={handleLogin} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      <br />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
    </form>
  );
}

export default Login;
