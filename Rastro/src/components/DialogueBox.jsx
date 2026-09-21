import React from "react";
import PixelMishi from "./PixelMishi";
import CozyButton from "./CozyButton";

/**
 * components/DialogueBox.jsx
 * 
 * Cuadro de diálogo interactivo estilo RPG clásico de exploración.
 * No contiene emojis.
 * 
 * Props obligatorias:
 * @param {string} characterName Nombre del personaje que habla (ej: "Mishi").
 * @param {string} message Mensaje o línea de diálogo.
 * @param {string} portrait Expresión o tipo de retrato.
 * @param {Function} onNext Función que se ejecuta al presionar el botón de avance.
 * @param {boolean} showNextButton Si debe mostrarse el botón "Continuar".
 */
export default function DialogueBox({
  characterName = "Mishi",
  message = "",
  portrait = "normal",
  onNext,
  showNextButton = true,
}) {
  return (
    <div
      className="rpg-dialogue-box-container"
      role="region"
      aria-label={`Diálogo de ${characterName}`}
    >
      <div className="rpg-dialogue-box">
        {/* Retrato pixel art a la izquierda */}
        <div className="rpg-dialogue-box__portrait-col">
          <div className="dialogue-portrait-box">
            <PixelMishi direction="down" size="medium" />
          </div>
          <div className="rpg-dialogue-box__name-tag">
            <span>{characterName}</span>
          </div>
        </div>

        {/* Mensaje y controles */}
        <div className="rpg-dialogue-box__content-col">
          <div className="rpg-dialogue-box__speech-bubble">
            <p key={message} className="rpg-dialogue-box__text">
              "{message}"
            </p>
          </div>

          {/* Botón Continuar */}
          {showNextButton && (
            <div className="rpg-dialogue-box__action-row">
              <CozyButton
                onClick={onNext}
                variant="accent"
                ariaLabel="Continuar al siguiente diálogo"
                className="cozy-btn--dialogue"
              >
                Continuar
              </CozyButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
