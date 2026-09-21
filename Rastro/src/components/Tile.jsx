import React from "react";

/**
 * components/Tile.jsx
 * 
 * Componente atómico que representa una casilla individual de la cuadrícula.
 * Aplica clases CSS semánticas según el tipo de terreno (pared, suelo, alfombra,
 * techo, jardín, no transitable, puerta, salida, obstáculo, interior).
 * 
 * @param {string} tileType Tipo de casilla ('wall', 'floor', 'carpet', 'roof', 'garden', 'water', 'door', 'exit', 'blocked', 'interior')
 * @param {number} row Coordenada de fila (0-indexed)
 * @param {number} col Coordenada de columna (0-indexed)
 * @param {React.ReactNode} children Elementos contenidos en la casilla (Mishi u objetos)
 */
export default function Tile({
  tileType = "floor",
  row,
  col,
  children,
}) {
  return (
    <div
      className={`cozy-tile cozy-tile--${tileType}`}
      data-row={row}
      data-col={col}
      role="gridcell"
      aria-label={`Casilla ${tileType} en fila ${row + 1}, columna ${col + 1}`}
    >
      {/* Textura o patrón sutil de fondo según el tipo de casilla */}
      <span className="cozy-tile__texture" aria-hidden="true" />

      {/* Contenido posicionado sobre la casilla (objeto o Mishi) */}
      {children}
    </div>
  );
}

