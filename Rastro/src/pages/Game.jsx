import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import RPGHud from "../components/RPGHud";
import RPGViewport from "../components/RPGViewport";
import RPGInventory from "../components/RPGInventory";
import RPGPuzzleHint from "../components/RPGPuzzleHint";
import DialogueBox from "../components/DialogueBox";
import { gameMaps, defaultMapId } from "../data/maps";

/**
 * pages/Game.jsx
 * 
 * Pantalla principal de exploración RPG 2D Cozy.
 * Utiliza `useParams` para cargar dinámicamente el mapa activo (:mapa).
 * 
 * Integra:
 * - HUD superior estilo RPG.
 * - Viewport con cuadrícula de tiles pixel-art y cámara superior.
 * - Movimiento de Mishi con flechas de teclado y D-pad en pantalla.
 * - Detección de objetos cercanos con indicador flotante [E] Examinar.
 * - Cuadro de diálogo inferior café oscuro con retrato de Mishi.
 * - Inventario visual de objetos recolectados.
 * - Modal de pistas relajantes.
 */
export default function Game() {
  const { mapa } = useParams();
  const navigate = useNavigate();

  // Obtenemos los datos del mapa actual
  const currentMapData = gameMaps[mapa] || gameMaps[defaultMapId];

  // Estado del jugador (posición actual en la cuadrícula)
  const [playerPos, setPlayerPos] = useState(currentMapData.initialPlayerPos);

  // Estado del inventario de objetos
  const [inventory, setInventory] = useState([
    { name: "Lazo de Mishi", icon: "🎀", desc: "El moño rosado que Yosu le regaló." },
  ]);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  // Estado del modal de pistas
  const [isHintOpen, setIsHintOpen] = useState(false);

  // Estado del diálogo de inspección activo
  const [activeDialogue, setActiveDialogue] = useState({
    isOpen: true,
    speaker: "Mishi",
    text: `Acabo de llegar a: ${currentMapData.title}. ${currentMapData.description}`,
  });

  // Al cambiar de ruta/mapa, reiniciamos la posición del jugador
  useEffect(() => {
    setPlayerPos(currentMapData.initialPlayerPos);
    setActiveDialogue({
      isOpen: true,
      speaker: "Mishi",
      text: `${currentMapData.title}: ${currentMapData.description}`,
    });
  }, [mapa]);

  // Verificar si hay algún objeto interactuable adyacente a Mishi
  const checkNearInteractable = () => {
    const { layout, interactables, dimensions } = currentMapData;
    const directions = [
      { r: -1, c: 0 },
      { r: 1, c: 0 },
      { r: 0, c: -1 },
      { r: 0, c: 1 },
      { r: 0, c: 0 }, // misma celda
    ];

    for (const d of directions) {
      const nr = playerPos.row + d.r;
      const nc = playerPos.col + d.c;

      if (nr >= 0 && nr < dimensions.rows && nc >= 0 && nc < dimensions.cols) {
        const code = layout[nr][nc];
        if (interactables[code]) {
          return { code, ...interactables[code] };
        }
      }
    }
    return null;
  };

  const nearInteractable = checkNearInteractable();

  // Mover al jugador validando límites del mapa
  const movePlayer = (direction) => {
    let { row, col } = playerPos;
    if (direction === "up") row -= 1;
    if (direction === "down") row += 1;
    if (direction === "left") col -= 1;
    if (direction === "right") col += 1;

    const { dimensions, layout } = currentMapData;
    if (row >= 0 && row < dimensions.rows && col >= 0 && col < dimensions.cols) {
      const targetTile = layout[row][col];
      // Evitamos atravesar muros o cerca exterior
      if (targetTile !== "W" && targetTile !== "FNC" && targetTile !== "SKY") {
        setPlayerPos({ row, col });
      }
    }
  };

  // Soporte de movimiento mediante teclado (Flechas o WASD) y tecla E para interactuar
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === "arrowup" || key === "w") {
        e.preventDefault();
        movePlayer("up");
      } else if (key === "arrowdown" || key === "s") {
        e.preventDefault();
        movePlayer("down");
      } else if (key === "arrowleft" || key === "a") {
        e.preventDefault();
        movePlayer("left");
      } else if (key === "arrowright" || key === "d") {
        e.preventDefault();
        movePlayer("right");
      } else if (key === "e" || key === " ") {
        if (nearInteractable) {
          e.preventDefault();
          handleInteract();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, nearInteractable]);

  // Acción de interactuar con el objeto cercano
  const handleInteract = () => {
    if (!nearInteractable) return;

    setActiveDialogue({
      isOpen: true,
      speaker: nearInteractable.name,
      text: nearInteractable.text,
    });

    // Si el objeto otorga un nuevo ítem y no lo tenemos aún en el inventario
    if (nearInteractable.itemReward) {
      setInventory((prev) => {
        const alreadyHas = prev.some((it) => it.name === nearInteractable.itemReward);
        if (!alreadyHas) {
          return [
            ...prev,
            {
              name: nearInteractable.itemReward,
              icon: nearInteractable.icon || "🐾",
              desc: `Encontrado en ${currentMapData.title}.`,
            },
          ];
        }
        return prev;
      });
    }

    // Si es la salida del mapa, ofrecer avanzar
    if (nearInteractable.isExit) {
      if (currentMapData.nextMap === "completado") {
        setTimeout(() => navigate("/completado"), 1200);
      } else {
        setTimeout(() => navigate(`/jugar/${currentMapData.nextMap}`), 1200);
      }
    }
  };

  const handleNextMap = () => {
    if (currentMapData.nextMap === "completado") {
      navigate("/completado");
    } else {
      navigate(`/jugar/${currentMapData.nextMap}`);
    }
  };

  return (
    <div className="page page--rpg-game">
      {/* HUD Superior con información del nivel, objetivo y accesos */}
      <RPGHud
        mapTitle={currentMapData.title}
        mapSubtitle={currentMapData.subtitle}
        objective={currentMapData.puzzleGoal}
        inventoryCount={inventory.length}
        onOpenInventory={() => setIsInventoryOpen(true)}
        onOpenHint={() => setIsHintOpen(true)}
      />

      {/* Franja de cambio rápido de nivel para probar rutas dinámicas */}
      <div className="cozy-level-nav-strip">
        <span className="strip-title">🗺️ Mapa actual:</span>
        <div className="strip-links">
          {Object.values(gameMaps).map((m) => (
            <Link
              key={m.id}
              to={`/jugar/${m.id}`}
              className={`cozy-pill-btn ${currentMapData.id === m.id ? "cozy-pill-btn--active" : ""}`}
            >
              {m.number}. {m.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Zona principal del juego: Escenario 2D + Controles táctiles */}
      <div className="rpg-gameplay-stage">
        {/* Viewport 2D con tiles orgánicos y Mishi */}
        <div className="rpg-stage__viewport-box">
          <RPGViewport
            mapData={currentMapData}
            playerPos={playerPos}
            onMovePlayer={setPlayerPos}
            onInteract={handleInteract}
            nearInteractable={nearInteractable}
          />
        </div>

        {/* Panel lateral con D-pad táctil acogedor e información rápida */}
        <div className="rpg-stage__side-controls">
          <div className="cozy-wooden-dpad-box">
            <h4 className="dpad-box-title">🎮 Controles Táctiles</h4>
            <p className="dpad-box-desc">
              Usa el teclado (flechas / WASD / E) o estos botones grandes:
            </p>

            <div className="cozy-dpad">
              <div className="cozy-dpad__row">
                <button
                  type="button"
                  className="cozy-dpad-btn"
                  onClick={() => movePlayer("up")}
                  title="Mover Arriba"
                >
                  ⬆️
                </button>
              </div>

              <div className="cozy-dpad__row">
                <button
                  type="button"
                  className="cozy-dpad-btn"
                  onClick={() => movePlayer("left")}
                  title="Mover Izquierda"
                >
                  ⬅️
                </button>

                <button
                  type="button"
                  className={`cozy-dpad-btn cozy-dpad-btn--interact ${nearInteractable ? "cozy-dpad-btn--highlight" : ""}`}
                  onClick={handleInteract}
                  title="Examinar o Interactuar"
                >
                  🐾
                </button>

                <button
                  type="button"
                  className="cozy-dpad-btn"
                  onClick={() => movePlayer("right")}
                  title="Mover Derecha"
                >
                  ➡️
                </button>
              </div>

              <div className="cozy-dpad__row">
                <button
                  type="button"
                  className="cozy-dpad-btn"
                  onClick={() => movePlayer("down")}
                  title="Mover Abajo"
                >
                  ⬇️
                </button>
              </div>
            </div>
          </div>

          {/* Botón grande para avanzar de mapa */}
          <div className="stage-progression-panel">
            <button
              type="button"
              onClick={handleNextMap}
              className="cozy-rpg-btn cozy-rpg-btn--hero cozy-rpg-btn--block"
            >
              {currentMapData.nextMap === "completado"
                ? "💖 ¡Reunirse con Yosu!"
                : `➡️ Avanzar: ${currentMapData.nextMapLabel}`}
            </button>
          </div>
        </div>
      </div>

      {/* Cuadro de diálogo inferior clásico de RPG */}
      {activeDialogue.isOpen && (
        <div className="rpg-bottom-dialogue-container">
          <DialogueBox
            speaker={activeDialogue.speaker}
            text={activeDialogue.text}
            currentIndex={0}
            total={1}
            isLast={true}
            isFinished={false}
            onNext={() => setActiveDialogue((prev) => ({ ...prev, isOpen: false }))}
            onFinishAction={() => setActiveDialogue((prev) => ({ ...prev, isOpen: false }))}
            finishButtonText="Continuar explorando 🐾"
          />
        </div>
      )}

      {/* Modal de Inventario Visual */}
      <RPGInventory
        isOpen={isInventoryOpen}
        items={inventory}
        onClose={() => setIsInventoryOpen(false)}
      />

      {/* Modal de Pistas Acogedoras */}
      <RPGPuzzleHint
        isOpen={isHintOpen}
        hintText={currentMapData.hint}
        mapTitle={currentMapData.title}
        onClose={() => setIsHintOpen(false)}
      />
    </div>
  );
}
