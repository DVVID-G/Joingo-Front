import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí luego vas a conectar Firebase Auth o tu backend
    console.log("Datos enviados:", form);
  };

  return (
    <div className="container-page">
      <div className="form-container">
        <h1>Crear Cuenta</h1>

        <form onSubmit={handleSubmit} className="form">

          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrarme</button>
        </form>

        <p>
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
