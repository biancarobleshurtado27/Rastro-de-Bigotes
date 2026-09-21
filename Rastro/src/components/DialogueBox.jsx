import React from "react";

/**
 * components/DialogueBox.jsx
 * 
 * Cuadro de diálogo interactivo estilo RPG / aventura clásica.
 * Muestra:
 * - Retrato pixelado del personaje que habla (Mishi).
 * - Nombre del personaje.
 * - Texto del diálogo actual.
 * - Indicador de avance (ej. 1 de 4).
 * - Botón "Siguiente" o botón de acción final al terminar la conversación.
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
  finishButtonText = "🐾 Comenzar primer mapa",
}) {
  return (
    <div className="dialogue-box">
      {/* Retrato del personaje */}
      <div className="dialogue-box__portrait-container">
        <div className="dialogue-box__portrait">
          <div className="pixel-cat-avatar">
            <span className="cat-face">🐱</span>
            <span className="cat-ribbon">🎀</span>
          </div>
        </div>
        <div className="dialogue-box__speaker-badge">
          {speaker}
        </div>
      </div>

      {/* Contenido del texto */}
      <div className="dialogue-box__content">
        <div className="dialogue-box__bubble">
          <p className="dialogue-box__text">"{text}"</p>
        </div>

        {/* Barra de progreso y botones de acción */}
        <div className="dialogue-box__footer">
          <span className="dialogue-box__counter">
            {currentIndex + 1} / {total}
          </span>

          <div className="dialogue-box__actions">
            {!isLast && !isFinished && (
              <button
                type="button"
                onClick={onNext}
                className="retro-btn retro-btn--action"
              >
                Siguiente 💬
              </button>
            )}

            {isLast && !isFinished && (
              <button
                type="button"
                onClick={onNext}
                className="retro-btn retro-btn--accent"
              >
                Continuar 🐾
              </button>
            )}

            {isFinished && (
              <button
                type="button"
                onClick={onFinishAction}
                className="retro-btn retro-btn--primary retro-btn--pulsing"
              >
                {finishButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

