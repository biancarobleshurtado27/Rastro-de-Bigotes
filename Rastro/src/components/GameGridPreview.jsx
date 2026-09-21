import React from "react";

/**
 * components/GameGridPreview.jsx
 * 
 * Componente que representa la cuadrícula 2D del juego utilizando CSS Grid.
 * Muestra visualmente las celdas del tablero (suelo, paredes, posición inicial
 * de Mishi, pistas y salidas) como base didáctica antes de implementar
 * el motor de movimiento.
 */
export default function GameGridPreview({
  rows = 6,
  cols = 6,
  mapId = "casa-mishi",
}) {
  // Generamos un arreglo bidimensional para crear cada celda del tablero
  const gridCells = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isMishiStart = r === 4 && c === 1;
      const isExit = r === 1 && c === 4;
      const isClue = r === 2 && c === 2;
      const isWall =
        r === 0 || r === rows - 1 || c === 0 || c === cols - 1;

      let cellType = "floor";
      let cellContent = "";
      let cellLabel = "Suelo";

      if (isMishiStart) {
        cellType = "player";
        cellContent = "🐱";
        cellLabel = "Mishi (Inicio)";
      } else if (isExit) {
        cellType = "exit";
        cellContent = mapId === "casa-yosu" ? "❤️" : "🚪";
        cellLabel = mapId === "casa-yosu" ? "Yosu" : "Salida";
      } else if (isClue) {
        cellType = "clue";
        cellContent = "🧶";
        cellLabel = "Pista";
      } else if (isWall && !isExit) {
        cellType = "wall";
        cellContent = "🧱";
        cellLabel = "Muro";
      }

      gridCells.push({
        id: `cell-${r}-${c}`,
        row: r,
        col: c,
        type: cellType,
        content: cellContent,
        label: cellLabel,
      });
    }
  }

  return (
    <div className="game-grid-container">
      <div className="game-grid-legend">
        <span className="legend-item"><span className="legend-icon">🐱</span> Mishi</span>
        <span className="legend-item"><span className="legend-icon">🧶</span> Pista / Ovillo</span>
        <span className="legend-item"><span className="legend-icon">🚪</span> Salida al siguiente mapa</span>
        <span className="legend-item"><span className="legend-icon">🧱</span> Muro / Límite</span>
      </div>

      {/* Cuadrícula construida enteramente con CSS Grid */}
      <div
        className="retro-game-grid"
        style={{
          "--grid-rows": rows,
          "--grid-cols": cols,
        }}
      >
        {gridCells.map((cell) => (
          <div
            key={cell.id}
            className={`grid-cell grid-cell--${cell.type}`}
            title={`Fila ${cell.row + 1}, Columna ${cell.col + 1}: ${cell.label}`}
          >
            {cell.content && <span className="cell-entity">{cell.content}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

