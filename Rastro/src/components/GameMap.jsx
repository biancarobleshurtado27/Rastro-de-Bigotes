import React from "react";
import Tile from "./Tile";
import PixelObject from "./PixelObject";
import PixelMishi from "./PixelMishi";
import PixelYosu from "./PixelYosu";

/**
 * components/GameMap.jsx
 * 
 * Cuadrícula visual del escenario 2D en vista superior:
 * - Renderiza cada celda con `Tile.jsx` aplicando CSS Grid.
 * - Renderiza los objetos del mapa mediante `PixelObject.jsx` (sin emojis).
 * - Posiciona a Mishi en su casilla actual `{ row, col }` usando `PixelMishi.jsx`.
 * - Si estamos en la Casa de Yosu en la zona final, renderiza a `PixelYosu.jsx`.
 * 
 * @param {Object} map Objeto con metadata, dimensiones, tiles y objetos del mapa
 * @param {Object} mishiPosition Coordenadas { row, col } de Mishi
 * @param {string} direction Dirección cardinal actual ('up', 'down', 'left', 'right')
 * @param {boolean} isMoving Si Mishi está en movimiento
 */
export default function GameMap({
  map,
  mishiPosition = { row: 0, col: 0 },
  direction = "down",
  isMoving = false,
}) {
  if (!map || !map.tiles) {
    return <div className="game-map--empty">No hay datos de mapa para mostrar.</div>;
  }

  const { id: mapId, rows, cols, tiles, interactiveObjects = [], theme = "mishi-house" } = map;

  /**
   * Helper para encontrar si existe un objeto interactivo o decorativo
   * en la coordenada especificada (r, c).
   */
  const findObjectAt = (r, c) => {
    return interactiveObjects.find((obj) => obj.row === r && obj.col === c);
  };

  return (
    <div className={`game-map-wrapper theme--${theme}`}>
      <div
        className="game-map-grid"
        style={{
          "--grid-rows": rows,
          "--grid-cols": cols,
        }}
        role="grid"
        aria-label={`Cuadrícula del mapa ${map.name}, ${rows} filas por ${cols} columnas`}
      >
        {tiles.map((rowArray, r) =>
          rowArray.map((tileType, c) => {
            const isMishiHere = mishiPosition.row === r && mishiPosition.col === c;
            const objectHere = findObjectAt(r, c);
            const isYosuSpot = mapId === "casa-yosu" && r === 2 && c === 10;

            return (
              <Tile
                key={`tile-${r}-${c}`}
                tileType={tileType}
                row={r}
                col={c}
              >
                {/* Objeto de la casilla */}
                {objectHere && !isYosuSpot && (
                  <PixelObject
                    type={objectHere.type}
                    name={objectHere.name}
                    interactive={objectHere.isInteractive}
                  />
                )}

                {/* Yosu en su rincón en la casa final */}
                {isYosuSpot && (
                  <PixelYosu size="small" mood="resting" />
                )}

                {/* Mishi ubicada en su casilla actual */}
                {isMishiHere && (
                  <div className="mishi-tile-slot">
                    <PixelMishi
                      direction={direction}
                      isMoving={isMoving}
                      size="small"
                    />
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
