import React from "react";

/**
 * components/Tile.jsx
 * 
 * Casilla individual de la cuadrícula RPG 2D.
 * No utiliza emojis; renderiza texturas y patrones visuales con CSS.
 * 
 * Clases obligatorias soportadas:
 * - tile-wall (pared)
 * - tile-floor (suelo)
 * - tile-carpet (alfombra)
 * - tile-roof (techo)
 * - tile-garden (jardín)
 * - tile-water (agua / abismo no transitable)
 * - tile-door (puerta)
 * - tile-exit (salida del mapa)
 * - tile-blocked (obstáculo)
 * - tile-interior (suelo interior)
 * 
 * @param {string} tileType Tipo de casilla
 * @param {number} row Coordenada de fila
 * @param {number} col Coordenada de columna
 * @param {React.ReactNode} children Contenido ubicado en la casilla (Mishi o PixelObject)
 */
export default function Tile({
  tileType = "floor",
  row,
  col,
  children,
}) {
  return (
    <div
      className={`tile tile-${tileType}`}
      data-row={row}
      data-col={col}
      role="gridcell"
      aria-label={`Casilla tipo ${tileType} en fila ${row + 1}, columna ${col + 1}`}
    >
      {/* Capa de textura ambiental CSS */}
      <div className="tile-texture" aria-hidden="true" />

      {/* Contenido renderizado dentro de la casilla */}
      {children}
    </div>
  );
}
