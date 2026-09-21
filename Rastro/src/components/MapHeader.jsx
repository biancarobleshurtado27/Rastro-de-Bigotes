import React from "react";
import { Link } from "react-router-dom";

/**
 * components/MapHeader.jsx
 * 
 * Barra superior del mapa con estética de RPG clásico cozy.
 * Muestra:
 * - Nombre del mapa activo.
 * - Objetivo actual de exploración.
 * - Indicador de progreso temporal.
 * - Botón para regresar a la página principal.
 * 
 * @param {string} mapName Nombre del mapa (ej. "Casa de Mishi").
 * @param {string} objective Objetivo actual del mapa.
 * @param {string|number} progress Indicador temporal de progreso.
 */
export default function MapHeader({
  mapName = "Mapa",
  objective = "Explorar el entorno",
  progress = "0 / 2 Puzzles",
}) {
  return (
    <div className="map-header-bar" role="banner">
      {/* Título del mapa y botón de regreso */}
      <div className="map-header-bar__main">
        <Link
          to="/"
          className="cozy-btn cozy-btn--secondary map-header-bar__back-btn"
          aria-label="Volver a la portada principal"
        >
          🏠 Inicio
        </Link>
        <div className="map-header-bar__titles">
          <span className="map-header-bar__tag">🐾 RPG 2D Cozy</span>
          <h2 className="map-header-bar__title">{mapName}</h2>
        </div>
      </div>

      {/* Objetivo e indicador de progreso */}
      <div className="map-header-bar__meta">
        <div className="map-objective-box">
          <span className="map-objective-label">🎯 Objetivo:</span>
          <span className="map-objective-text">{objective}</span>
        </div>

        <div className="map-progress-pill" title="Progreso del mapa">
          <span className="map-progress-icon">🧩</span>
          <span className="map-progress-text">{progress}</span>
        </div>
      </div>
    </div>
  );
}

