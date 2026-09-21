import React from "react";
import { useParams, Link } from "react-router-dom";
import { mapNames } from "../data/storyData";

/**
 * pages/Game.jsx
 * 
 * Pantalla de juego dinámica con parámetro de ruta (:mapa).
 * Hace uso del hook `useParams` de React Router DOM para capturar el valor
 * presente en la URL (por ejemplo: 'casa-mishi', 'techos', 'casa-yosu').
 * 
 * Cumple con los requisitos solicitados:
 * - Muestra el nombre legible del mapa obtenido desde useParams.
 * - Muestra el mensaje temporal: “Aquí comenzará el mapa de Mishi”.
 * - Incluye un botón para regresar al inicio.
 * - Mantiene un diseño visual coherente, retro y cozy.
 */
export default function Game() {
  // Obtenemos el parámetro dinámico ':mapa' de la URL actual
  const { mapa } = useParams();

  // Convertimos el parámetro en su nombre legible según las reglas dadas
  const mapDisplayName = mapNames[mapa] || "Mapa Desconocido";

  return (
    <div className="page page--game">
      <div className="cozy-game-placeholder-card">
        {/* Cabecera del Nivel */}
        <div className="game-stage-header">
          <div className="stage-param-tag">
            <span>Ruta activa: <code>/jugar/{mapa}</code></span>
          </div>
          <h2 className="stage-title">{mapDisplayName}</h2>
        </div>

        {/* Mensaje temporal requerido */}
        <div className="stage-announcement-box">
          <div className="stage-cat-icon">🐱</div>
          <p className="stage-message-text">
            “Aquí comenzará el mapa de Mishi”.
          </p>
          <small className="stage-hint-text">
            (En la siguiente fase, aquí se renderizará la cuadrícula interactiva con Mishi, los objetos y los puzzles de exploración).
          </small>
        </div>

        {/* Barra de prueba de rutas dinámicas para verificar useParams */}
        <div className="stage-map-tester">
          <span className="tester-label">Probar otros mapas con useParams:</span>
          <div className="tester-buttons">
            <Link
              to="/jugar/casa-mishi"
              className={`tester-btn ${mapa === "casa-mishi" ? "tester-btn--active" : ""}`}
            >
              1. Casa de Mishi
            </Link>
            <Link
              to="/jugar/techos"
              className={`tester-btn ${mapa === "techos" ? "tester-btn--active" : ""}`}
            >
              2. Techos y vecindario
            </Link>
            <Link
              to="/jugar/casa-yosu"
              className={`tester-btn ${mapa === "casa-yosu" ? "tester-btn--active" : ""}`}
            >
              3. Casa de Yosu
            </Link>
          </div>
        </div>

        {/* Botón para regresar al inicio */}
        <div className="stage-footer-actions">
          <Link to="/" className="cozy-btn cozy-btn--secondary">
            🏠 Regresar al inicio
          </Link>
          <Link to="/completado" className="cozy-btn cozy-btn--accent">
            ✨ Vista previa de pantalla de finalización
          </Link>
        </div>
      </div>
    </div>
  );
}
