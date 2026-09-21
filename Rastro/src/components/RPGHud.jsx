import React from "react";

/**
 * components/RPGHud.jsx
 * 
 * Barra superior de estado estilo RPG de exploración acogedor:
 * - Nombre de la zona actual con icono representativo.
 * - Pergamino con el objetivo actual del puzzle.
 * - Botón para abrir la bolsa de inventario.
 * - Botón de pista tierna ("¿Una patita?").
 */
export default function RPGHud({
  mapTitle = "Casa de Mishi",
  mapSubtitle = "Habitación cálida",
  objective = "Busca una pista...",
  inventoryCount = 0,
  onOpenInventory,
  onOpenHint,
}) {
  return (
    <div className="rpg-hud">
      {/* Información del escenario actual */}
      <div className="rpg-hud__location">
        <div className="rpg-hud__pin-icon">📍</div>
        <div className="rpg-hud__location-text">
          <span className="rpg-hud__map-title">{mapTitle}</span>
          <span className="rpg-hud__map-sub">{mapSubtitle}</span>
        </div>
      </div>

      {/* Pergamino con el objetivo actual */}
      <div className="rpg-hud__objective">
        <span className="rpg-hud__objective-icon">🎯</span>
        <div className="rpg-hud__objective-content">
          <span className="rpg-hud__objective-label">Objetivo:</span>
          <span className="rpg-hud__objective-text">{objective}</span>
        </div>
      </div>

      {/* Botones de acción rápida: Inventario y Pista */}
      <div className="rpg-hud__actions">
        <button
          type="button"
          onClick={onOpenInventory}
          className="rpg-hud-btn rpg-hud-btn--inventory"
          title="Abrir bolsa de objetos"
        >
          <span className="rpg-hud-btn__icon">🎒</span>
          <span className="rpg-hud-btn__label">Bolsa</span>
          {inventoryCount > 0 && (
            <span className="rpg-hud-btn__badge">{inventoryCount}</span>
          )}
        </button>

        <button
          type="button"
          onClick={onOpenHint}
          className="rpg-hud-btn rpg-hud-btn--hint"
          title="Pedir una pista relajante"
        >
          <span className="rpg-hud-btn__icon">💡</span>
          <span className="rpg-hud-btn__label">¿Pista?</span>
        </button>
      </div>
    </div>
  );
}

