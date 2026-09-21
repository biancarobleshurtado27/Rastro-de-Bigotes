import React from "react";

/**
 * components/MobileControls.jsx
 * 
 * Controles direccionales en pantalla diseñados para dispositivos móviles y mouse.
 * No utiliza emojis ni flechas unicode como representación visual principal.
 * Las flechas direccionales están construidas enteramente con geometría CSS y pixel art.
 * 
 * @param {Function} onMove Función callback que recibe 'up', 'down', 'left' o 'right'
 * @param {string} className Clases CSS adicionales
 */
export default function MobileControls({ onMove, className = "" }) {
  const handleDirection = (dir) => {
    if (typeof onMove === "function") {
      onMove(dir);
    }
  };

  return (
    <div
      className={`mobile-dpad-container ${className}`}
      role="group"
      aria-label="Controles de movimiento en pantalla"
    >
      <div className="mobile-dpad">
        {/* Fila Superior: Arriba */}
        <div className="mobile-dpad__row mobile-dpad__row--top">
          <button
            type="button"
            onClick={() => handleDirection("up")}
            aria-label="Mover hacia arriba"
            className="dpad-btn dpad-btn--up"
          >
            <span className="control-arrow control-arrow-up" aria-hidden="true" />
          </button>
        </div>

        {/* Fila Central: Izquierda, Centro decorativo, Derecha */}
        <div className="mobile-dpad__row mobile-dpad__row--middle">
          <button
            type="button"
            onClick={() => handleDirection("left")}
            aria-label="Mover hacia la izquierda"
            className="dpad-btn dpad-btn--left"
          >
            <span className="control-arrow control-arrow-left" aria-hidden="true" />
          </button>

          {/* Centro táctil neutral */}
          <div className="dpad-btn--center" aria-hidden="true">
            <span className="dpad-center-core" />
          </div>

          <button
            type="button"
            onClick={() => handleDirection("right")}
            aria-label="Mover hacia la derecha"
            className="dpad-btn dpad-btn--right"
          >
            <span className="control-arrow control-arrow-right" aria-hidden="true" />
          </button>
        </div>

        {/* Fila Inferior: Abajo */}
        <div className="mobile-dpad__row mobile-dpad__row--bottom">
          <button
            type="button"
            onClick={() => handleDirection("down")}
            aria-label="Mover hacia abajo"
            className="dpad-btn dpad-btn--down"
          >
            <span className="control-arrow control-arrow-down" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

