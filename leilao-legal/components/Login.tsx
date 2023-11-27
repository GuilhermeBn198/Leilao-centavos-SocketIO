import React, { useState } from 'react';

interface user {
    nome_user: string,
    email: string,
    dinheiro: number
}

interface LoginModalProps {
  onLogin: (userData: user) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
  const [form, setForm] = useState<user>({
    nome_user: '',
    email: '',
    dinheiro: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-lg ">
        <input
          type="text"
          name="nome_user"
          value={form.nome_user}
          onChange={handleChange}
          placeholder="Nome"
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900"
        />
        <input
          type="number"
          name="dinheiro"
          placeholder="Dinheiro"
          value={form.dinheiro}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900"
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
