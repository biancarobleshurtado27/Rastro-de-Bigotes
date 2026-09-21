import React from "react";
import Tile from "./Tile";
import MapObject from "./MapObject";

/**
 * components/GameMap.jsx
 * 
 * Componente principal que renderiza el escenario 2D en vista superior:
 * - Recibe el objeto `map` (con `rows`, `cols`, `tiles`, `interactiveObjects`, `theme`).
 * - Recibe `mishiPosition` con las coordenadas `{ row, col }` actuales de Mishi.
 * - Utiliza CSS Grid dinámico mediante variables CSS (`--grid-rows`, `--grid-cols`).
 * - Utiliza `map()` de JavaScript para iterar las filas y columnas con keys únicas y estables.
 * - Posiciona a los objetos interactivos y a Mishi en sus casillas correspondientes.
 * 
 * @param {Object} map Objeto con la metadata y matriz del mapa.
 * @param {Object} mishiPosition Coordenadas `{ row, col }` de Mishi.
 */
export default function GameMap({
  map,
  mishiPosition = { row: 0, col: 0 },
}) {
  if (!map || !map.tiles) {
    return <div className="game-map--empty">No hay datos de mapa para mostrar.</div>;
  }

  const { rows, cols, tiles, interactiveObjects = [], theme = "mishi-house" } = map;

  /**
   * Helper para buscar si existe un objeto interactivo o decorativo
   * en la coordenada (r, c) dada.
   */
  const findObjectAt = (r, c) => {
    return interactiveObjects.find((obj) => obj.row === r && obj.col === c);
  };

  return (
    <div className={`game-map-wrapper theme--${theme}`}>
      {/* Marco de madera o piedra decorativo del mapa */}
      <div
        className="game-map-grid"
        style={{
          "--grid-rows": rows,
          "--grid-cols": cols,
        }}
        role="grid"
        aria-label={`Mapa ${map.name} de ${rows} filas por ${cols} columnas`}
      >
        {/* Renderizado de casillas mediante map() */}
        {tiles.map((rowArray, r) =>
          rowArray.map((tileType, c) => {
            const isMishiHere = mishiPosition.row === r && mishiPosition.col === c;
            const objectHere = findObjectAt(r, c);

            return (
              <Tile
                key={`tile-${r}-${c}`}
                tileType={tileType}
                row={r}
                col={c}
              >
                {/* Objeto en la casilla si existe */}
                {objectHere && (
                  <MapObject
                    name={objectHere.name}
                    type={objectHere.type}
                    row={objectHere.row}
                    col={objectHere.col}
                    isInteractive={objectHere.isInteractive}
                    label={objectHere.label}
                  />
                )}

                {/* Representación visual temporal de Mishi */}
                {isMishiHere && (
                  <div
                    className="mishi-token"
                    title={`Mishi en posición (${r + 1}, ${c + 1})`}
                    role="img"
                    aria-label="Mishi en la casilla"
                  >
                    <div className="mishi-token__shadow" />
                    <div className="mishi-token__cat">
                      <span className="cat-glyph">🐱</span>
                      <span className="cat-ribbon">🎀</span>
                    </div>
                  </div>
                )}
              </Tile>
            );
          })
        )}
      </div>
    </div>
  );
}

