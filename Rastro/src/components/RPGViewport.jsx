import React from "react";

/**
 * components/RPGViewport.jsx
 * 
 * Vista superior 2D estilo RPG clásico de exploración.
 * Representa el escenario mediante tiles pixel-art integrados armónicamente
 * sin líneas de cuadrícula toscas o rígidas:
 * - Suelos con texturas acogedoras (madera con vetas, tejas suaves, hierba menta).
 * - Objetos decorativos con relieve y sombras suaves.
 * - Mishi situada sobre el mapa con posibilidad de desplazarse paso a paso.
 * - Indicador flotante contextual "[🐾 Examinar]" cuando Mishi está cerca de un objeto.
 */
export default function RPGViewport({
  mapData,
  playerPos = { row: 5, col: 3 },
  onMovePlayer,
  onInteract,
  nearInteractable = null,
}) {
  const { layout, interactables, theme, dimensions } = mapData;

  // Función para determinar si una celda es adyacente al jugador (para permitir clic directo)
  const isAdjacent = (r, c) => {
    const dRow = Math.abs(r - playerPos.row);
    const dCol = Math.abs(c - playerPos.col);
    return (dRow === 1 && dCol === 0) || (dRow === 0 && dCol === 1);
  };

  const handleCellClick = (r, c, tileCode) => {
    // Si se hace clic en una celda adyacente o interactuable
    if (isAdjacent(r, c) && tileCode !== "W" && tileCode !== "FNC" && tileCode !== "SKY") {
      onMovePlayer({ row: r, col: c });
    }
  };

  // Helper para renderizar los detalles visuales de cada tipo de tile
  const renderTileContent = (code, r, c) => {
    const isPlayerHere = playerPos.row === r && playerPos.col === c;

    let tileClass = "rpg-tile";
    let spriteElement = null;

    switch (code) {
      /* ==================== 1. Casa de Mishi ==================== */
      case "W":
        tileClass += " tile-wall-wood";
        spriteElement = <div className="sprite-wood-wall" />;
        break;
      case "F":
        tileClass += " tile-floor-wood";
        break;
      case "R":
        tileClass += " tile-floor-rug";
        break;
      case "B":
        tileClass += " tile-furniture tile-floor-wood";
        spriteElement = (
          <div className="cozy-sprite sprite-bed" title="Cama de Mishi">
            <span className="sprite-emoji">🛏️</span>
            <span className="sprite-detail-blanket"></span>
          </div>
        );
        break;
      case "S":
        tileClass += " tile-furniture tile-wall-wood";
        spriteElement = (
          <div className="cozy-sprite sprite-shelf" title="Estantería con libros">
            <span className="sprite-emoji">📚</span>
          </div>
        );
        break;
      case "P":
        tileClass += " tile-furniture tile-wall-wood";
        spriteElement = (
          <div className="cozy-sprite sprite-photo" title="Foto de Mishi y Yosu">
            <span className="sprite-emoji">🖼️</span>
          </div>
        );
        break;
      case "Y":
        tileClass += " tile-floor-wood";
        spriteElement = (
          <div className="cozy-sprite sprite-toy-yarn" title="Ovillo de lana rosa">
            <span className="sprite-emoji">🧶</span>
          </div>
        );
        break;
      case "L":
        tileClass += " tile-floor-wood";
        spriteElement = (
          <div className="cozy-sprite sprite-plant" title="Planta de interior">
            <span className="sprite-emoji">🪴</span>
          </div>
        );
        break;
      case "WIN":
        tileClass += " tile-wall-wood tile-window";
        spriteElement = (
          <div className="cozy-sprite sprite-sun-window" title="Ventana con luz cálida">
            <span className="sprite-emoji">🪟</span>
            <div className="sunlight-beam" />
          </div>
        );
        break;
      case "D":
        tileClass += " tile-floor-wood tile-doorway";
        spriteElement = (
          <div className="cozy-sprite sprite-door" title="Salida hacia el tejado">
            <span className="sprite-emoji">🚪</span>
          </div>
        );
        break;

      /* ==================== 2. Techo y Vecindario ==================== */
      case "SKY":
        tileClass += " tile-sunset-sky";
        spriteElement = <div className="cloud-particle">☁️</div>;
        break;
      case "T":
        tileClass += " tile-roof-shingle";
        break;
      case "CH":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-chimney" title="Chimenea con humo">
            <span className="chimney-smoke">💨</span>
            <span className="sprite-emoji">🧱</span>
          </div>
        );
        break;
      case "ANT":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-antenna" title="Antena de TV">
            <span className="sprite-emoji">📡</span>
          </div>
        );
        break;
      case "BX":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-crate" title="Cajas de madera apiladas">
            <span className="sprite-emoji">📦</span>
          </div>
        );
        break;
      case "PT":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-pot" title="Macetas en cornisa">
            <span className="sprite-emoji">🌸</span>
          </div>
        );
        break;
      case "CL":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-clothesline" title="Ropa tendida ondeando">
            <span className="clothesline-line"></span>
            <span className="sprite-emoji">🧺</span>
          </div>
        );
        break;
      case "RW":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-neighbor-window" title="Ventana cálida de vecinos">
            <span className="sprite-emoji">🪟</span>
          </div>
        );
        break;
      case "EXIT_ROOF":
        tileClass += " tile-roof-shingle";
        spriteElement = (
          <div className="cozy-sprite sprite-ladder" title="Bajada al patio de Yosu">
            <span className="sprite-emoji">🪜</span>
          </div>
        );
        break;

      /* ==================== 3. Casa de Yosu ==================== */
      case "FNC":
        tileClass += " tile-garden-fence";
        spriteElement = <div className="fence-post">🪵</div>;
        break;
      case "G":
        tileClass += " tile-garden-grass";
        break;
      case "PTH":
        tileClass += " tile-garden-path";
        break;
      case "LAN":
        tileClass += " tile-garden-grass";
        spriteElement = (
          <div className="cozy-sprite sprite-lantern" title="Farol cálido encendido">
            <div className="lantern-glow"></div>
            <span className="sprite-emoji">🏮</span>
          </div>
        );
        break;
      case "PAW":
        tileClass += " tile-garden-path";
        spriteElement = (
          <div className="cozy-sprite sprite-pawprints" title="Huellas de gato">
            <span className="sprite-emoji">🐾</span>
          </div>
        );
        break;
      case "TOY":
        tileClass += " tile-garden-grass";
        spriteElement = (
          <div className="cozy-sprite sprite-fish-toy" title="Pescadito de juguete de Yosu">
            <span className="sprite-emoji">🐟</span>
          </div>
        );
        break;
      case "BWL":
        tileClass += " tile-garden-grass";
        spriteElement = (
          <div className="cozy-sprite sprite-bowl" title="Plato de comida">
            <span className="sprite-emoji">🥣</span>
          </div>
        );
        break;
      case "FLW":
        tileClass += " tile-garden-grass";
        spriteElement = (
          <div className="cozy-sprite sprite-lavender" title="Arbusto de lavanda">
            <span className="sprite-emoji">🌿</span>
          </div>
        );
        break;
      case "WIN_Y":
        tileClass += " tile-garden-fence tile-window-lit";
        spriteElement = (
          <div className="cozy-sprite sprite-yosu-window" title="Ventana con silueta">
            <span className="sprite-emoji">🪟</span>
          </div>
        );
        break;
      case "DR":
        tileClass += " tile-garden-path";
        spriteElement = (
          <div className="cozy-sprite sprite-yosu-door" title="Puerta de la casa de Yosu">
            <span className="sprite-emoji">🚪</span>
          </div>
        );
        break;

      default:
        tileClass += " tile-generic";
    }

    return (
      <div
        key={`tile-${r}-${c}`}
        className={`${tileClass} ${isAdjacent(r, c) ? "tile-adjacent" : ""}`}
        onClick={() => handleCellClick(r, c, code)}
      >
        {spriteElement}

        {/* Mishi, la protagonista felina */}
        {isPlayerHere && (
          <div className="mishi-player-entity">
            <div className="mishi-shadow" />
            <div className="mishi-sprite-box">
              <span className="mishi-cat">🐱</span>
              <span className="mishi-bow">🎀</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`rpg-viewport-frame theme--${theme}`}>
      {/* Indicador de interacción contextual flotante */}
      {nearInteractable && (
        <div className="interaction-bubble-prompt" onClick={onInteract}>
          <span className="prompt-paw">🐾</span>
          <span className="prompt-key">[E]</span>
          <span className="prompt-text">Examinar {nearInteractable.name}</span>
        </div>
      )}

      {/* Escenario renderizado con cuadrícula orgánica de tiles */}
      <div
        className="rpg-tiles-grid"
        style={{
          "--grid-rows": dimensions.rows,
          "--grid-cols": dimensions.cols,
        }}
      >
        {layout.map((row, r) =>
          row.map((tileCode, c) => renderTileContent(tileCode, r, c))
        )}
      </div>

      <div className="viewport-ambient-overlay" />
    </div>
  );
}

