import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MapHeader from "../components/MapHeader";
import GameMap from "../components/GameMap";
import MapLegend from "../components/MapLegend";
import { mapsData } from "../data/mapsData";

/**
 * pages/Game.jsx
 * 
 * Pantalla principal de juego que integra la cuadrícula visual de los mapas:
 * 1. Lee el parámetro de ruta ':mapa' con `useParams`.
 * 2. Consulta `mapsData[mapa]`.
 * 3. Si no existe, muestra un mensaje de error amigable y botón de retorno.
 * 4. Inicializa la posición de Mishi mediante `useState` con `map.startPosition`.
 * 5. Muestra `MapHeader`, `GameMap`, `MapLegend` y el aviso didáctico de movimiento.
 */
export default function Game() {
  const { mapa } = useParams();

  // Buscar el mapa en la estructura de datos
  const currentMap = mapsData[mapa];

  // Estado temporal de la posición de Mishi, inicializado con la posición de inicio del mapa
  const [mishiPosition, setMishiPosition] = useState(
    currentMap ? currentMap.startPosition : { row: 0, col: 0 }
  );

  // Sincronizar la posición cuando el parámetro de la URL cambia
  useEffect(() => {
    if (currentMap) {
      setMishiPosition(currentMap.startPosition);
    }
  }, [mapa]);

  // Manejo de error si el mapa no existe en los datos
  if (!currentMap) {
    return (
      <div className="page page--game-error">
        <div className="cozy-error-card">
          <div className="error-icon">😿</div>
          <h2 className="error-title">Mapa no encontrado</h2>
          <p className="error-message">
            El mapa con identificador <code>"{mapa}"</code> no existe en los datos del juego.
          </p>
          <div className="error-actions">
            <Link to="/" className="cozy-btn cozy-btn--secondary">
              🏠 Volver al inicio
            </Link>
            <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
              🐾 Ir a la Casa de Mishi
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--game">
      {/* 1. Encabezado del Mapa */}
      <MapHeader
        mapName={currentMap.name}
        objective={currentMap.objective}
        progress={`0 / ${currentMap.puzzles.length} Puzzles`}
      />

      {/* Selector de prueba de mapas */}
      <div className="map-quick-selector" role="navigation" aria-label="Cambiar entre mapas">
        <span className="selector-title">📍 Explorar los tres mapas:</span>
        <div className="selector-links">
          {Object.values(mapsData).map((m) => (
            <Link
              key={m.id}
              to={`/jugar/${m.id}`}
              className={`selector-chip ${m.id === currentMap.id ? "selector-chip--active" : ""}`}
            >
              {m.name} ({m.rows}x{m.cols})
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Cuadrícula Visual del Mapa */}
      <section className="game-stage-container" aria-label={`Escenario de ${currentMap.name}`}>
        <GameMap
          map={currentMap}
          mishiPosition={mishiPosition}
        />
      </section>

      {/* 3. Leyenda del Mapa */}
      <MapLegend />

      {/* 4. Aviso didáctico de la etapa */}
      <div className="stage-notice-banner" role="note">
        <span className="notice-icon">ℹ️</span>
        <div className="notice-text">
          <strong>Etapa visual:</strong> Mishi se encuentra en su posición inicial 
          <code>(Fila {mishiPosition.row + 1}, Columna {mishiPosition.col + 1})</code>. 
          El movimiento con teclado/táctil, la detección de colisiones y la resolución de puzzles se agregarán en la siguiente etapa.
        </div>
      </div>
    </div>
  );
}
