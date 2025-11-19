import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/useAuthStore';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { loginWithGoogle, initAuthObserver } = useAuthStore();

    // Campos del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsub = initAuthObserver();
        return () => unsub();
    }, [initAuthObserver]);

    // Login con Google
    const handleLoginGoogle = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginWithGoogle();
            navigate("/profile");
        } catch (err) {
            console.error("Error al iniciar sesión con Google:", err);
        }
    };

    // Login tradicional (solo UI, tú decides la lógica luego)
    const handleLoginEmail = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login con email:", email, password);
        // Falta la logica del login
    };

    // Registro tradicional (solo UI)
    const handleRegister = () => {
        console.log("Ir al registro");
        navigate("/register"); // Falta la pagina del registro
    };

    return (
        <div className="container-page">
            <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <h1>Iniciar Sesión</h1>

                {/* FORMULARIO EMAIL - PASSWORD */}
                <form onSubmit={handleLoginEmail} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Ingresar</button>
                </form>

                <hr style={{ margin: "20px 0" }} />

                {/* LOGIN CON GOOGLE */}
                <button onClick={handleLoginGoogle} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="icons/google-icon.svg" alt="Google" width={24} height={24} />
                    <span>Continuar con Google</span>
                </button>

                {/* BOTÓN DE REGISTRO */}
                <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>

            </div>
        </div>
    );
};

export default Login;
