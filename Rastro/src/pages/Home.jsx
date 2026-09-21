import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import CozyButton from "../components/CozyButton";
import PixelMishi from "../components/PixelMishi";
import PixelObject from "../components/PixelObject";
import PixelDecoration from "../components/PixelDecoration";
import { initialStory } from "../data/storyData";

/**
 * pages/Home.jsx
 * 
 * Pantalla principal del videojuego "Rastro de Bigotes".
 * Completamente libre de emojis; ilustra la habitación de Mishi con CSS puro:
 * - Ventana iluminada, cama, planta, estante, foto enmarcada de Mishi y Yosu.
 * - Mishi dibujada con PixelMishi (CSS puro).
 * - Secuencia de diálogos mediante DialogueBox.
 * - Botón "Entrar a la casa de Mishi" que redirige a /jugar/casa-mishi mediante useNavigate.
 */
export default function Home() {
  const navigate = useNavigate();
  const [storyStarted, setStoryStarted] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const totalDialogues = initialStory.length;
  const isLastDialogue = currentDialogueIndex === totalDialogues - 1;
  const currentDialogue = initialStory[currentDialogueIndex];

  const handleStartStory = () => {
    setStoryStarted(true);
    setCurrentDialogueIndex(0);
  };

  const handleNextDialogue = () => {
    if (currentDialogueIndex < totalDialogues - 1) {
      setCurrentDialogueIndex((prev) => prev + 1);
    }
  };

  const handleEnterHouse = () => {
    navigate("/jugar/casa-mishi");
  };

  return (
    <div className="page page--home">
      <div className="cozy-title-screen">
        {/* Cabecera de la Portada */}
        <div className="title-screen__header">
          <div className="title-screen__badge" aria-hidden="true">
            RPG 2D Cozy de Puzzles
          </div>
          <h1 className="title-screen__game-name">Rastro de Bigotes</h1>
          <p className="title-screen__subtitle">
            Una pequeña aventura para volver a encontrar a alguien especial
          </p>
        </div>

        {/* Ilustración de la Casa de Mishi hecha 100% con HTML y CSS */}
        <div
          className="cozy-room-illustration"
          role="region"
          aria-label="Ilustración pixel art de la casa de Mishi con ventana cálida, cama, plantas y recuerdos"
        >
          {/* Ventana con luz cálida (PixelObject) */}
          <div className="room-item room-item--window" title="Ventana con luz del atardecer">
            <PixelObject type="window" name="Ventana al atardecer" />
            <div className="window-sunbeam" aria-hidden="true" />
          </div>

          {/* Fotografía / Recuerdo de Yosu en la pared (PixelObject) */}
          <div className="room-item room-item--frame" title="Fotografía de Mishi y Yosu">
            <PixelObject type="photo" name="Fotografía de Mishi y Yosu" />
            <span className="frame-caption">Yosu y Mishi</span>
          </div>

          {/* Planta decorativa (PixelObject) */}
          <div className="room-item room-item--plant" title="Planta en maceta">
            <PixelObject type="plant" name="Planta de interior" />
          </div>

          {/* Cama suave de Mishi (PixelObject) */}
          <div className="room-item room-item--bed" title="Cama cálida de Mishi">
            <PixelObject type="bed" name="Cama suave" />
          </div>

          {/* Ilustración pixel art de Mishi hecha en CSS */}
          <div className="room-item room-item--mishi" title="Mishi en su habitación">
            <PixelMishi direction="down" size="large" />
          </div>

          {/* Decoraciones pixeladas CSS (sin emojis) */}
          <div className="room-item room-item--decors" aria-hidden="true">
            <PixelDecoration type="star" className="decor-star" />
            <PixelDecoration type="pawprint" className="decor-paw" />
            <PixelDecoration type="sparkle" className="decor-sparkle" />
          </div>

          {/* Suelo de madera */}
          <div className="room-floor-base" aria-hidden="true" />
        </div>

        {/* Sección de Acción / Narrativa */}
        {!storyStarted ? (
          <div className="title-screen__actions">
            <p className="title-screen__lore-text">
              El tejado donde siempre te esperaba Yosu hoy está silencioso.
              ¿Acompañarás a Mishi a descubrir su rastro?
            </p>

            <div className="title-screen__buttons-row">
              <CozyButton
                onClick={handleStartStory}
                variant="hero"
                ariaLabel="Comenzar la historia de Mishi y Yosu"
              >
                Comenzar historia
              </CozyButton>

              <Link to="/instrucciones" className="cozy-btn cozy-btn--secondary">
                Cómo jugar
              </Link>
            </div>
          </div>
        ) : (
          /* Secuencia de Diálogos estilo RPG */
          <div className="title-screen__narrative-stage">
            <div className="narrative-progress-tag">
              <span>Recuerdos de Mishi ({currentDialogueIndex + 1} de {totalDialogues})</span>
            </div>

            <DialogueBox
              characterName={currentDialogue.characterName}
              message={currentDialogue.message}
              portrait={currentDialogue.portrait}
              onNext={handleNextDialogue}
              showNextButton={!isLastDialogue}
            />

            {/* Al terminar todos los diálogos, se muestra el botón final */}
            {isLastDialogue && (
              <div className="title-screen__final-action-box">
                <CozyButton
                  onClick={handleEnterHouse}
                  variant="hero"
                  ariaLabel="Entrar a la casa de Mishi y comenzar a jugar"
                  className="cozy-btn--enter-house"
                >
                  Entrar a la casa de Mishi
                </CozyButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
