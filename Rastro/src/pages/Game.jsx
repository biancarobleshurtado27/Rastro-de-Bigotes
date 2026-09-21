import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MapHeader from "../components/MapHeader";
import GameMap from "../components/GameMap";
import MapLegend from "../components/MapLegend";
import MobileControls from "../components/MobileControls";
import { useGridMovement } from "../hooks/useGridMovement";
import { mapsData } from "../data/mapsData";

/**
 * pages/Game.jsx
 * 
 * Pantalla principal del mapa con movimiento interactivo de Mishi:
 * - Lee el parámetro dinámico ':mapa' de la URL con `useParams`.
 * - Gestiona la posición, dirección y validación con el custom hook `useGridMovement`.
 * - Escucha las flechas del teclado (ArrowUp, ArrowDown, ArrowLeft, ArrowRight) con limpieza.
 * - Muestra los controles táctiles en pantalla con `MobileControls`.
 * - Muestra un mensaje sutil y suave cuando una casilla está bloqueada ("Por aquí no se puede pasar.").
 * - No contiene ningún emoji.
 */
export default function Game() {
  const { mapa } = useParams();
  const currentMap = mapsData[mapa];

  // Hook personalizado para gestionar el movimiento en la cuadrícula
  const {
    position,
    direction,
    isMoving,
    move,
    blockedMessage,
  } = useGridMovement(currentMap?.startPosition, currentMap);

  // Escuchar eventos del teclado para mover a Mishi
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignorar si el usuario está enfocado en un campo de texto o elemento interactivo similar
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        return;
      }

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          move("up");
          break;
        case "ArrowDown":
          e.preventDefault();
          move("down");
          break;
        case "ArrowLeft":
          e.preventDefault();
          move("left");
          break;
        case "ArrowRight":
          e.preventDefault();
          move("right");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Limpieza de evento al desmontar el componente o cambiar dependencias
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [move]);

  // Manejo de error si la ruta no corresponde a ningún mapa
  if (!currentMap) {
    return (
      <div className="page page--game-error">
        <div className="cozy-error-card">
          <h2 className="error-title">Mapa no encontrado</h2>
          <p className="error-message">
            El mapa con identificador <code>"{mapa}"</code> no existe en el juego.
          </p>
          <div className="error-actions">
            <Link to="/" className="cozy-btn cozy-btn--secondary">
              Volver al inicio
            </Link>
            <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
              Ir a la Casa de Mishi
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

      {/* Selector rápido para probar los 3 mapas con useParams */}
      <div className="map-quick-selector" role="navigation" aria-label="Cambiar entre mapas">
        <span className="selector-title">Explorar los mapas:</span>
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

      {/* 2. Cuadrícula Visual del Escenario */}
      <section className="game-stage-container" aria-label={`Escenario de ${currentMap.name}`}>
        <GameMap
          map={currentMap}
          mishiPosition={position}
          direction={direction}
          isMoving={isMoving}
        />
      </section>

      {/* Mensaje de bloqueo suave (sin alertas invasivas ni emojis) */}
      {blockedMessage && (
        <div className="blocked-toast" role="status" aria-live="polite">
          <span className="blocked-toast__text">{blockedMessage}</span>
        </div>
      )}

      {/* 3. Controles en Pantalla para Dispositivos Móviles / Ratón */}
      <div className="game-controls-section">
        <span className="controls-heading">Controles de movimiento:</span>
        <MobileControls onMove={move} />
      </div>

      {/* 4. Leyenda del Mapa */}
      <MapLegend />

      {/* 5. Coordenadas e información de estado */}
      <div className="stage-notice-banner" role="status">
        <div className="notice-text">
          Posición actual de Mishi: 
          <code>Fila {position.row + 1}, Columna {position.col + 1}</code> 
          (Orientación: <code>{direction}</code>). Usa las flechas del teclado o los botones en pantalla para moverte.
        </div>
      </div>
    </div>
  );
}
