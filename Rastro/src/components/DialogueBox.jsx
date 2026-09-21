import React from "react";

/**
 * components/DialogueBox.jsx
 * 
 * Cuadro de diálogo clásico para RPGs acogedores.
 * Diseñado con:
 * - Fondo de café oscuro semitransparente.
 * - Borde pixelado doble en tonos durazno y crema pastel.
 * - Sombra sólida/dura retro pixel art.
 * - Placa destacada con el nombre del personaje.
 * - Retrato pixel art de Mishi con su moño rosa.
 * - Animación de aparición de texto suave.
 * - Botón "Continuar 🐾" o acción de avance.
 */
export default function DialogueBox({
  speaker = "Mishi",
  text = "",
  currentIndex = 0,
  total = 1,
  isLast = false,
  isFinished = false,
  onNext,
  onFinishAction,
  finishButtonText = "Continuar el viaje 🐾",
}) {
  return (
    <div className="cozy-dialogue-wrapper">
      <div className="cozy-dialogue-box">
        {/* Retrato pixel art del personaje */}
        <div className="cozy-dialogue__portrait-frame">
          <div className="cozy-dialogue__portrait">
            <div className="portrait-sprite-cat">
              <span className="portrait-cat-face">🐱</span>
              <span className="portrait-cat-ribbon">🎀</span>
            </div>
          </div>
          <div className="cozy-dialogue__speaker-tag">
            {speaker}
          </div>
        </div>

        {/* Cuerpo del diálogo */}
        <div className="cozy-dialogue__body">
          <div className="cozy-dialogue__text-container">
            <p key={text} className="cozy-dialogue__text-animated">
              "{text}"
            </p>
          </div>

          {/* Pie del diálogo: Contador y Botón Continuar */}
          <div className="cozy-dialogue__footer">
            <div className="cozy-dialogue__progress-indicator">
              <span className="dot-active">🐾</span>
              <span className="progress-numbers">
                {currentIndex + 1} / {total}
              </span>
            </div>

            <div className="cozy-dialogue__btn-group">
              {!isLast && !isFinished && (
                <button
                  type="button"
                  onClick={onNext}
                  className="cozy-rpg-btn cozy-rpg-btn--continue"
                >
                  Continuar 🐾
                </button>
              )}

              {isLast && !isFinished && (
                <button
                  type="button"
                  onClick={onNext}
                  className="cozy-rpg-btn cozy-rpg-btn--accent"
                >
                  Continuar 🐾
                </button>
              )}

              {isFinished && (
                <button
                  type="button"
                  onClick={onFinishAction}
                  className="cozy-rpg-btn cozy-rpg-btn--primary"
                >
                  {finishButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
