import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PixelCard from "../components/PixelCard";
import GameGridPreview from "../components/GameGridPreview";
import { gameMaps, defaultMapId } from "../data/maps";

/**
 * pages/Game.jsx
 * 
 * Pantalla principal de juego.
 * Hace uso del hook `useParams` de React Router DOM para obtener el parámetro dinámico
 * `:mapa` desde la URL (por ejemplo: /jugar/casa-mishi o /jugar/techo-vecindario).
 * 
 * Muestra:
 * - Título y número del mapa actual.
 * - Objetivo del puzzle.
 * - Tablero 2D renderizado con CSS Grid (`GameGridPreview`).
 * - Botones táctiles de movimiento en pantalla (D-pad).
 * - Enlace / botón para avanzar al siguiente mapa o terminar el juego.
 */
export default function Game() {
  // Extraemos el parámetro dinámico ':mapa' de la URL actual
  const { mapa } = useParams();
  const navigate = useNavigate();

  // Buscamos la información del mapa en nuestra base de datos local
  const currentMapData = gameMaps[mapa] || gameMaps[defaultMapId];
  const isCustomNotFound = !gameMaps[mapa];

  const handleNextMap = () => {
    if (currentMapData.nextMap === "completado") {
      navigate("/completado");
    } else {
      navigate(`/jugar/${currentMapData.nextMap}`);
    }
  };

  return (
    <div className="page page--game">
      {/* Aviso si la ruta no existe y se usó un mapa por defecto */}
      {isCustomNotFound && (
        <div className="warning-banner">
          ⚠️ El mapa <code>"{mapa}"</code> no fue encontrado. Mostrando el mapa por defecto:{" "}
          <strong>{currentMapData.title}</strong>.
        </div>
      )}

      {/* Cabecera del nivel actual */}
      <section className="game-header">
        <div className="game-header__badges">
          <span className="badge badge--stage">
            Nivel {currentMapData.number} de 3
          </span>
          <span className="badge badge--param">
            Ruta URL: <code>/jugar/{mapa || defaultMapId}</code>
          </span>
        </div>

        <h1 className="game-header__title">{currentMapData.title}</h1>
        <p className="game-header__description">{currentMapData.description}</p>
      </section>

      {/* Selector rápido para probar y comprobar cómo cambia useParams */}
      <div className="map-selector-strip">
        <span className="map-selector-label">📍 Cambiar mapa rápidamente:</span>
        <div className="map-selector-buttons">
          {Object.values(gameMaps).map((m) => (
            <Link
              key={m.id}
              to={`/jugar/${m.id}`}
              className={`retro-btn retro-btn--small ${
                currentMapData.id === m.id ? "retro-btn--active" : ""
              }`}
            >
              {m.number}. {m.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Zona principal del juego: Cuadrícula CSS Grid + Panel Lateral */}
      <div className="game-layout">
        {/* Tablero de juego con CSS Grid */}
        <div className="game-main-area">
          <PixelCard title={`Cuadrícula 2D - ${currentMapData.title}`} variant="cream">
            <GameGridPreview
              rows={currentMapData.gridSize.rows}
              cols={currentMapData.gridSize.cols}
              mapId={currentMapData.id}
            />
          </PixelCard>
        </div>

        {/* Panel lateral: Objetivo, Controles en pantalla y Avance */}
        <div className="game-side-panel">
          {/* Tarjeta de Puzzle / Misión */}
          <PixelCard title="🧩 Objetivo del Puzzle" variant="pink">
            <p className="puzzle-text">{currentMapData.puzzleGoal}</p>
            <div className="puzzle-hint-box">
              <span className="hint-icon">💡</span>
              <small>
                Pista preliminar: Los ovillos de lana ocultan secretos en este mapa.
              </small>
            </div>
          </PixelCard>

          {/* Botones de control en pantalla (D-Pad táctil) */}
          <PixelCard title="🎮 Controles en Pantalla" variant="blue">
            <p className="controls-note">
              Botones grandes adaptados para dispositivos móviles y mouse:
            </p>

            <div className="dpad-interactive">
              <div className="dpad-row">
                <button
                  type="button"
                  className="retro-control-btn"
                  onClick={() => alert("Mishi mira hacia ARRIBA (lógica de movimiento lista para la siguiente fase)")}
                >
                  ⬆️
                </button>
              </div>

              <div className="dpad-row">
                <button
                  type="button"
                  className="retro-control-btn"
                  onClick={() => alert("Mishi mira hacia la IZQUIERDA")}
                >
                  ⬅️
                </button>

                <button
                  type="button"
                  className="retro-control-btn retro-control-btn--action"
                  title="Interactuar"
                  onClick={() => alert("¡Mishi olfatea el entorno en busca del rastro de bigotes!")}
                >
                  🐾
                </button>

                <button
                  type="button"
                  className="retro-control-btn"
                  onClick={() => alert("Mishi mira hacia la DERECHA")}
                >
                  ➡️
                </button>
              </div>

              <div className="dpad-row">
                <button
                  type="button"
                  className="retro-control-btn"
                  onClick={() => alert("Mishi mira hacia ABAJO")}
                >
                  ⬇️
                </button>
              </div>
            </div>
          </PixelCard>

          {/* Botón para avanzar al siguiente mapa */}
          <div className="level-progression-box">
            <button
              type="button"
              onClick={handleNextMap}
              className="retro-btn retro-btn--accent retro-btn--full"
            >
              {currentMapData.nextMap === "completado"
                ? "💖 " + currentMapData.nextMapLabel
                : "➡️ " + currentMapData.nextMapLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

