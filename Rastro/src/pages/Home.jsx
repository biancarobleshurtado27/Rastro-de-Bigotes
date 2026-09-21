import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import CozyButton from "../components/CozyButton";
import CharacterPortrait from "../components/CharacterPortrait";
import { initialStory } from "../data/storyData";

/**
 * pages/Home.jsx
 * 
 * Pantalla principal del videojuego "Rastro de Bigotes".
 * Presenta la portada del RPG cozy con:
 * - Ilustración completa con HTML/CSS de la habitación de Mishi (ventana, cama, planta, foto de Yosu).
 * - Ilustración temporal hecha con CSS de Mishi.
 * - Título, subtítulo y botones "Comenzar historia" y "Cómo jugar".
 * - Secuencia de diálogos mediante DialogueBox que avanza por los 6 pensamientos de Mishi.
 * - Botón final "Entrar a la casa de Mishi" que redirige a /jugar/casa-mishi mediante useNavigate.
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
            🐾 RPG 2D Cozy de Puzzles
          </div>
          <h1 className="title-screen__game-name">Rastro de Bigotes</h1>
          <p className="title-screen__subtitle">
            Una pequeña aventura para volver a encontrar a alguien especial
          </p>
        </div>

        {/* Ilustración de la Casa de Mishi hecha puramente con HTML y CSS */}
        <div
          className="cozy-room-illustration"
          role="region"
          aria-label="Ilustración de la casa de Mishi con ventana cálida, cama, plantas y recuerdos"
        >
          {/* Luz dorada y ventana */}
          <div className="room-item room-item--window" title="Ventana con luz del atardecer">
            <div className="window-frame">
              <div className="window-sky">
                <span className="window-sun" />
                <span className="window-cloud">☁️</span>
              </div>
              <div className="window-sill" />
            </div>
            <div className="window-sunbeam" />
          </div>

          {/* Fotografía / Recuerdo de Yosu en la pared */}
          <div className="room-item room-item--frame" title="Fotografía de Mishi y Yosu">
            <div className="wall-frame">
              <span className="frame-art">🖼️</span>
              <span className="frame-caption">Yosu &amp; Mishi</span>
            </div>
          </div>

          {/* Planta decorativa */}
          <div className="room-item room-item--plant" title="Planta en maceta menta">
            <div className="pixel-plant">
              <span className="plant-leaves">🪴</span>
            </div>
          </div>

          {/* Cama suave de Mishi */}
          <div className="room-item room-item--bed" title="Cama cálida de Mishi">
            <div className="pixel-bed">
              <span className="bed-blanket" />
              <span className="bed-pillow">🛏️</span>
            </div>
          </div>

          {/* Ilustración temporal de Mishi hecha con CSS puro */}
          <div className="room-item room-item--mishi" title="Mishi mirando hacia la ventana">
            <CharacterPortrait character="Mishi" expression="nostalgic" size="large" />
            <div className="mishi-ground-shadow" />
          </div>

          {/* Detalles decorativos: Huellitas, corazones y estrellas */}
          <div className="room-item room-item--decors" aria-hidden="true">
            <span className="decor-item decor-heart">💖</span>
            <span className="decor-item decor-paw">🐾</span>
            <span className="decor-item decor-star">✨</span>
            <span className="decor-item decor-yarn">🧶</span>
          </div>

          {/* Suelo de madera */}
          <div className="room-floor-base" />
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
                ✨ Comenzar historia
              </CozyButton>

              <Link to="/instrucciones" className="cozy-btn cozy-btn--secondary">
                📜 Cómo jugar
              </Link>
            </div>
          </div>
        ) : (
          /* Secuencia de Diálogos estilo RPG */
          <div className="title-screen__narrative-stage">
            <div className="narrative-progress-tag">
              <span>💭 Recuerdos de Mishi ({currentDialogueIndex + 1} de {totalDialogues})</span>
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
                  🐾 Entrar a la casa de Mishi
                </CozyButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
