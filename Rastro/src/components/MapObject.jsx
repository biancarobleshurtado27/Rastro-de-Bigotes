import React from "react";

/**
 * components/MapObject.jsx
 * 
 * Componente que renderiza un objeto decorativo o interactivo sobre una casilla:
 * - Distingue tipos: 'furniture' (muebles), 'clue' (pistas), 'door' (puertas),
 *   'item' (objetos coleccionables) y 'obstacle' (obstáculos).
 * - Muestra un indicador visual sutil cuando el objeto es interactivo (`isInteractive = true`).
 * 
 * @param {string} name Nombre descriptivo del objeto.
 * @param {string} type Categoría del objeto.
 * @param {number} row Coordenada de fila.
 * @param {number} col Coordenada de columna.
 * @param {boolean} isInteractive Si el objeto puede inspeccionarse o usarse en puzzles.
 * @param {string} label Etiqueta corta o identificador visual.
 */
export default function MapObject({
  name,
  type = "furniture",
  row,
  col,
  isInteractive = false,
  label,
}) {
  // Asignamos iconos o símbolos representativos sutiles según el nombre o categoría
  const getObjectSymbol = () => {
    switch (type) {
      case "clue":
        return "✨";
      case "door":
        return "🚪";
      case "item":
        return "⭐";
      case "obstacle":
        return "📦";
      case "furniture":
      default:
        return "🪑";
    }
  };

  return (
    <div
      className={`map-object map-object--${type} ${isInteractive ? "map-object--interactive" : ""}`}
      title={`${name} (${row + 1}, ${col + 1})${isInteractive ? " - [Interactuable]" : ""}`}
      aria-label={`${name} ${isInteractive ? "interactuable" : ""}`}
    >
      {/* Indicador visual sutil para objetos interactivos */}
      {isInteractive && (
        <span className="map-object__sparkle" aria-hidden="true">
          ✦
        </span>
      )}

      {/* Cuerpo del objeto con su etiqueta o glifo */}
      <div className="map-object__body">
        <span className="map-object__symbol" aria-hidden="true">
          {getObjectSymbol()}
        </span>
        <span className="map-object__label">{label || name}</span>
      </div>
    </div>
  );
}

