import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PixelCard from "../components/PixelCard";
import DialogueBox from "../components/DialogueBox";
import { initialStoryDialogues } from "../data/dialogues";
import { useDialogue } from "../hooks/useDialogue";

/**
 * pages/Home.jsx
 * 
 * Pantalla de inicio de "Rastro de Bigotes".
 * Presenta el título, la protagonista Mishi, la premisa emocional y
 * permite activar la secuencia de cuadros de diálogo tipo RPG para
 * comenzar la aventura hacia el primer mapa.
 */
export default function Home() {
  const navigate = useNavigate();
  const [storyStarted, setStoryStarted] = useState(false);

  // Hook personalizado para controlar los diálogos de Mishi
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
    // Redirige al primer mapa del juego usando React Router
    navigate("/jugar/casa-mishi");
  };

  return (
    <div className="page page--home">
      {/* Sección Hero / Portada */}
      <section className="home-hero">
        <div className="home-hero__badge">🐾 Aventura 2D de Puzzles</div>
        <h1 className="home-hero__title">Rastro de Bigotes</h1>
        <p className="home-hero__subtitle">
          Una pequeña gatita con una gran misión de amor.
        </p>
      </section>

      {/* Tarjeta de Presentación de Personajes e Historia */}
      <div className="home-grid">
        <PixelCard title="Protagonista: Mishi" variant="pink">
          <div className="mishi-presentation">
            <div className="pixel-art-cat-banner">
              <div className="pixel-cat-portrait large">
                <span className="cat-sprite">🐱</span>
                <span className="cat-accessory">🎀</span>
              </div>
            </div>

            <div className="mishi-bio">
              <h4>Mishi</h4>
              <p>
                Una gatita curiosa de pelaje suave y un moño rosado. Su corazón
                está preocupado porque su compañero, <strong>Yosu</strong>,
                ha desaparecido misteriosamente.
              </p>
            </div>
          </div>
        </PixelCard>

        <PixelCard title="La Historia" variant="lilac">
          <div className="story-intro">
            <p>
              Mishi y Yosu solían verse todos los atardeceres en el tejado más alto del vecindario.
              Pero hoy, el lugar está vacío y solo queda una suave brisa.
            </p>
            <p>
              Mishi no se rendirá: recorrerá tres zonas resolviendo puzzles hasta encontrarlo
              siguiendo las huellas, bigotes caídos y pistas que dejó a su paso.
            </p>

            {!storyStarted && (
              <div className="story-action-container">
                <button
                  type="button"
                  onClick={handleStartStory}
                  className="retro-btn retro-btn--primary retro-btn--large"
                >
                  ✨ Comenzar historia
                </button>
              </div>
            )}
          </div>
        </PixelCard>
      </div>

      {/* Cuadros de diálogo estilo videojuego cuando se inicia la historia */}
      {storyStarted && (
        <section className="home-dialogue-section">
          <div className="section-title-retro">
            <span>💭 Recuerdos de Mishi</span>
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

          <div className="dialogue-helper">
            <small>
              Haz clic en <strong>"Siguiente"</strong> para continuar escuchando los pensamientos de Mishi.
            </small>
          </div>
        </section>
      )}

      {/* Vista previa de los 3 mapas */}
      <section className="home-maps-preview">
        <h3 className="section-subtitle">El viaje de Mishi:</h3>
        <div className="maps-badges">
          <div className="map-badge">
            <span className="map-num">1</span>
            <span className="map-name">Casa de Mishi</span>
          </div>
          <span className="map-arrow">➡️</span>
          <div className="map-badge">
            <span className="map-num">2</span>
            <span className="map-name">Techo y Vecindario</span>
          </div>
          <span className="map-arrow">➡️</span>
          <div className="map-badge">
            <span className="map-num">3</span>
            <span className="map-name">Casa de Yosu</span>
          </div>
        </div>
      </section>
    </div>
  );
}

