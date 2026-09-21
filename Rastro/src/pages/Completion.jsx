import React from "react";
import { Link } from "react-router-dom";
import PixelCard from "../components/PixelCard";

/**
 * pages/Completion.jsx
 * 
 * Pantalla final de victoria y reencuentro.
 * Se muestra cuando Mishi completa los tres mapas y finalmente
 * encuentra a su compañero Yosu.
 */
export default function Completion() {
  return (
    <div className="page page--completion">
      <section className="completion-hero">
        <div className="hearts-cluster">💖 🐾 💕</div>
        <h1 className="retro-page-title">¡Misión Cumplida!</h1>
        <p className="retro-page-subtitle">
          ¡Mishi ha seguido el rastro de bigotes hasta el final!
        </p>
      </section>

      <div className="completion-content">
        <PixelCard title="El Reencuentro de Mishi y Yosu" variant="pink">
          <div className="reunion-scene">
            <div className="cats-together">
              <div className="cat-figure">
                <span className="cat-sprite">🐱</span>
                <span className="cat-name">Mishi 🎀</span>
              </div>
              <div className="love-icon">❤️</div>
              <div className="cat-figure">
                <span className="cat-sprite">🐱</span>
                <span className="cat-name">Yosu 🐟</span>
              </div>
            </div>

            <div className="reunion-dialogue">
              <p className="dialogue-quote">
                <strong>Yosu:</strong> "¡Mishi! Sabía que vendrías por mí. Me quedé dormido
                en este cálido rincón bajo el sol y no me di cuenta de cuántos días pasaron..."
              </p>
              <p className="dialogue-quote">
                <strong>Mishi:</strong> "¡Nunca dejaría de buscarte! Seguí cada uno de tus
                bigotes por toda la ciudad."
              </p>
            </div>
          </div>
        </PixelCard>

        <PixelCard title="Resumen de la Aventura" variant="lilac">
          <div className="stats-list">
            <div className="stat-row">
              <span>🏠 Mapa 1: Casa de Mishi</span>
              <span className="stat-status">✅ Resuelto</span>
            </div>
            <div className="stat-row">
              <span>🏙️ Mapa 2: Techo y Vecindario</span>
              <span className="stat-status">✅ Resuelto</span>
            </div>
            <div className="stat-row">
              <span>🏡 Mapa 3: Casa de Yosu</span>
              <span className="stat-status">✅ Resuelto</span>
            </div>
          </div>
        </PixelCard>
      </div>

      <div className="completion-actions">
        <Link to="/jugar/casa-mishi" className="retro-btn retro-btn--accent retro-btn--large">
          🔄 Jugar de nuevo
        </Link>
        <Link to="/" className="retro-btn retro-btn--primary retro-btn--large">
          🏠 Volver al inicio
        </Link>
      </div>
    </div>
  );
}

