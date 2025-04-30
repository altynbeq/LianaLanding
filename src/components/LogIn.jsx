import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'Admin' && password === '0709') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin-panel');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Вход в админку</h2>

        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white text-black p-3 mb-4 border rounded-md"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white text-black p-3 mb-4 border rounded-md"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LogIn;
