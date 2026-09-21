import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import { initialStoryDialogues } from "../data/dialogues";
import { useDialogue } from "../hooks/useDialogue";

/**
 * pages/Home.jsx
 * 
 * Portada oficial del RPG Cozy "Rastro de Bigotes".
 * Diseñada como una pantalla de inicio clásica de RPG de exploración:
 * - Escena ilustrada con Mishi en su habitación cálida mirando el atardecer por la ventana.
 * - Título con tipografía pixel art retro y colores pastel cálidos (crema, durazno, rosa).
 * - Menú acogedor estilo pergamino con opciones para iniciar la historia o consultar el diario de viaje.
 * - Secuencia de diálogos emotivos donde Mishi recuerda y extraña a Yosu.
 */
export default function Home() {
  const navigate = useNavigate();
  const [storyStarted, setStoryStarted] = useState(false);

  const {
    currentIndex,
    currentDialogue,
    total,
    isLast,
    isFinished,
    nextDialogue,
    resetDialogue,
  } = useDialogue(initialStoryDialogues);

  const handleStartStory = () => {
    setStoryStarted(true);
    resetDialogue();
  };

  const handleGoToFirstMap = () => {
    navigate("/jugar/casa-mishi");
  };

  return (
    <div className="page page--rpg-title">
      {/* Marco principal de la portada RPG */}
      <div className="rpg-title-screen-frame">
        {/* Cabecera con Título del Juego */}
        <header className="rpg-title-header">
          <div className="rpg-title-tag">🌸 Un RPG Cozy de Exploración y Puzzles</div>
          <h1 className="rpg-game-logo">Rastro de Bigotes</h1>
          <p className="rpg-game-tagline">
            Sigue las huellas, resuelve los misterios y encuentra al gato que extrañas.
          </p>
        </header>

        {/* Diorama / Escena Ilustrada de Mishi en su hogar */}
        <div className="rpg-cover-illustration">
          <div className="cover-room-background">
            {/* Ventana con rayos de sol del atardecer */}
            <div className="cover-sun-window">
              <div className="cover-sky-gradient">
                <span className="cover-cloud">☁️</span>
              </div>
              <div className="cover-sunbeams" />
            </div>

            {/* Cuadro de Yosu y Mishi en la pared */}
            <div className="cover-wall-frame" title="Foto de Mishi y Yosu">
              <span className="frame-icon">🖼️</span>
              <small className="frame-label">Yosu &amp; Mishi</small>
            </div>

            {/* Estantería y plantas */}
            <div className="cover-shelf">
              <span>🪴</span>
              <span>📚</span>
            </div>

            {/* Mishi en su cojín durazno */}
            <div className="cover-mishi-cushion">
              <div className="mishi-cover-character">
                <span className="cat-ears">🐱</span>
                <span className="cat-ribbon">🎀</span>
              </div>
              <span className="cushion-base">🛏️</span>
            </div>

            {/* Juguetes en el suelo de madera */}
            <div className="cover-floor-toys">
              <span className="toy-yarn" title="Ovillo de lana">🧶</span>
              <span className="toy-paw" title="Huella">🐾</span>
            </div>
          </div>
        </div>

        {/* Sin diálogos activos: Menú clásico de RPG */}
        {!storyStarted ? (
          <div className="rpg-title-menu">
            <div className="rpg-menu-scroll">
              <p className="rpg-prologue-preview">
                Mishi extraña profundamente a su compañero Yosu. Hoy el tejado estuvo silencioso,
                pero un rastro de bigotes y huellas frescas en la ventana la invitan a una aventura.
              </p>

              <div className="rpg-menu-actions">
                <button
                  type="button"
                  onClick={handleStartStory}
                  className="cozy-rpg-btn cozy-rpg-btn--hero"
                >
                  ✨ Comenzar historia
                </button>

                <Link
                  to="/instrucciones"
                  className="cozy-rpg-btn cozy-rpg-btn--secondary"
                >
                  📖 Diario de Aventuras (Instrucciones)
                </Link>
              </div>
            </div>

            {/* Lista visual de las 3 zonas del viaje */}
            <div className="rpg-zones-preview-bar">
              <span className="zone-preview-title">El mapa de la travesía:</span>
              <div className="zone-preview-chips">
                <div className="zone-chip">
                  <span className="zone-chip__num">1</span>
                  <span>🏠 Casa de Mishi</span>
                </div>
                <span className="zone-separator">➔</span>
                <div className="zone-chip">
                  <span className="zone-chip__num">2</span>
                  <span>🏙️ Techos del Vecindario</span>
                </div>
                <span className="zone-separator">➔</span>
                <div className="zone-chip">
                  <span className="zone-chip__num">3</span>
                  <span>🏡 Casa de Yosu</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Con la historia iniciada: Cuadro de diálogo RPG con los recuerdos de Mishi */
          <div className="rpg-title-dialogue-stage">
            <div className="dialogue-stage-banner">
              <span>💭 Prólogo: Los recuerdos de Mishi</span>
            </div>

            <DialogueBox
              speaker={currentDialogue.speaker}
              text={currentDialogue.text}
              currentIndex={currentIndex}
              total={total}
              isLast={isLast}
              isFinished={isFinished}
              onNext={nextDialogue}
              onFinishAction={handleGoToFirstMap}
              finishButtonText="🐾 Comenzar primer mapa (Casa de Mishi)"
            />
          </div>
        )}
      </div>
    </div>
  );
}
