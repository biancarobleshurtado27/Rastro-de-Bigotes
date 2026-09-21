import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Game from "./pages/Game";
import Completion from "./pages/Completion";

/**
 * App.jsx
 * 
 * Componente raíz de la aplicación.
 * Configura el enrutador de React (`BrowserRouter`) y define las rutas principales:
 * - `/`             -> Pantalla de Inicio (Home)
 * - `/instrucciones` -> Guía y Controles (Instructions)
 * - `/jugar/:mapa`  -> Pantalla de Juego dinámica con parámetro de mapa (Game)
 * - `/completado`   -> Pantalla de Victoria y Reencuentro (Completion)
 * - `*`             -> Redirección al Inicio si la URL no coincide
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Barra de navegación superior fija en todas las vistas */}
        <Navbar />

        {/* Contenido dinámico según la ruta activa */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instrucciones" element={<Instructions />} />
            <Route path="/jugar/:mapa" element={<Game />} />
            <Route path="/completado" element={<Completion />} />
            {/* Si el usuario ingresa una ruta desconocida, lo redirigimos a inicio */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Pie de página retro */}
        <footer className="retro-footer">
          <p>🐾 Rastro de Bigotes • Videojuego 2D con React y CSS Grid</p>
          <p>Mishi &amp; Yosu © 2026</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
