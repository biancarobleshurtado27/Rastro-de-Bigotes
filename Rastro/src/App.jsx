import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Game from "./pages/Game";
import Completion from "./pages/Completion";

/**
 * App.jsx
 * 
 * Componente principal de la aplicación.
 * Configura el enrutador BrowserRouter y define las 4 rutas obligatorias:
 * - `/`             -> Pantalla principal del juego (Home)
 * - `/instrucciones` -> Página con las instrucciones (Instructions)
 * - `/jugar/:mapa`  -> Página de juego con parámetro dinámico (Game)
 * - `/completado`   -> Página del final del juego (Completion)
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="cozy-app-container">
        {/* Cabecera persistente con logotipo y navegación */}
        <Header />

        {/* Zona principal donde se renderizan las páginas según la ruta activa */}
        <main className="cozy-main-view">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instrucciones" element={<Instructions />} />
            <Route path="/jugar/:mapa" element={<Game />} />
            <Route path="/completado" element={<Completion />} />
            {/* Redirección al inicio ante cualquier ruta no reconocida */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Pie de página sutil y tierno */}
        <footer className="cozy-app-footer" role="contentinfo">
          <p>🐾 Rastro de Bigotes • Videojuego 2D Cozy en React</p>
          <small>Mishi buscando a Yosu © 2026</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}
