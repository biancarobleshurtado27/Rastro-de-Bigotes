import React from "react";

/**
 * components/RPGPuzzleHint.jsx
 * 
 * Ventana modal de pista tierna y reconfortante ("¿Una patita?").
 * Se abre cuando el jugador desea orientación sin sensación de castigo ni prisa.
 */
export default function RPGPuzzleHint({
  isOpen = false,
  hintText = "",
  mapTitle = "",
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="rpg-modal-overlay" onClick={onClose}>
      <div
        className="rpg-modal rpg-hint-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rpg-modal__header">
          <div className="rpg-modal__title-group">
            <span className="rpg-modal__icon">💡</span>
            <h3 className="rpg-modal__title">Un susurro de ayuda</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rpg-modal__close-btn"
            title="Cerrar"
          >
            ✖
          </button>
        </div>

        <div className="rpg-hint__content">
          <div className="rpg-hint__cat-whisper">
            <span className="whisper-cat">🐱</span>
            <div className="whisper-bubble">
              <p className="whisper-title">Consejo para {mapTitle}:</p>
              <p className="whisper-text">"{hintText}"</p>
            </div>
          </div>
          <p className="rpg-hint__reassurance">
            🌸 Respira hondo. En este juego no hay tiempo límite ni penalizaciones. ¡Tómate todo el tiempo que necesites!
          </p>
        </div>

        <div className="rpg-modal__footer">
          <button
            type="button"
            onClick={onClose}
            className="retro-btn retro-btn--accent"
          >
            ¡Gracias, seguiré explorando! 🐾
          </button>
        </div>
      </div>
    </div>
  );
}

