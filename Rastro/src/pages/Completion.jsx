import React from "react";
import { Link } from "react-router-dom";

/**
 * pages/Completion.jsx
 * 
 * Pantalla final del RPG Cozy "Rastro de Bigotes".
 * Muestra el reencuentro de Mishi y Yosu al atardecer en el porche,
 * envueltos en una atmósfera cálida, con diálogo entrañable y música figurada de satisfacción.
 */
export default function Completion() {
  return (
    <div className="page page--rpg-completion">
      <div className="cozy-completion-card">
        {/* Cabecera festiva y tierna */}
        <div className="completion-hearts-float">
          <span>💖</span>
          <span>🐾</span>
          <span>💕</span>
        </div>

        <h1 className="completion-title">¡Juntos otra vez!</h1>
        <p className="completion-subtitle">
          El rastro de bigotes guio a Mishi directamente hasta los brazos de Yosu.
        </p>

        {/* Escena del reencuentro pixel art */}
        <div className="reunion-diorama">
          <div className="reunion-sky">
            <span className="reunion-star">✨</span>
            <span className="reunion-cloud">☁️</span>
            <span className="reunion-star">✨</span>
          </div>

          <div className="reunion-cats-porch">
            <div className="cat-reunion-figure">
              <div className="cat-sprite-large">🐱</div>
              <span className="cat-tag">Mishi 🎀</span>
            </div>

            <div className="reunion-heart-badge">❤️</div>

            <div className="cat-reunion-figure">
              <div className="cat-sprite-large">🐱</div>
              <span className="cat-tag">Yosu 🐟</span>
            </div>
          </div>

          <div className="reunion-porch-floor">
            <span>🪵 Porche cálido bajo el farol encendido</span>
          </div>
        </div>

        {/* Diálogo final entre ambos */}
        <div className="reunion-dialogue-box">
          <p className="reunion-speech">
            <strong>Yosu:</strong> "¡Mishi! Escuché tus pasos sigilosos desde el jardín.
            Me quedé dormido esperando las estrellas, pero nunca dudé de que encontrarías mi rastro."
          </p>
          <p className="reunion-speech">
            <strong>Mishi:</strong> "¡Nunca me rendiría, Yosu! Crucé la habitación, los tejados
            del vecindario y las chimeneas para estar aquí contigo."
          </p>
        </div>

        {/* Resumen de las 3 etapas completadas */}
        <div className="completion-stages-summary">
          <div className="stage-stamp">
            <span className="stamp-icon">🏠</span>
            <span className="stamp-name">1. Casa de Mishi</span>
            <span className="stamp-check">✅</span>
          </div>
          <div className="stage-stamp">
            <span className="stamp-icon">🏙️</span>
            <span className="stamp-name">2. Techos y Vecindario</span>
            <span className="stamp-check">✅</span>
          </div>
          <div className="stage-stamp">
            <span className="stamp-icon">🏡</span>
            <span className="stamp-name">3. Casa de Yosu</span>
            <span className="stamp-check">✅</span>
          </div>
        </div>

        {/* Botones de acción final */}
        <div className="completion-actions-group">
          <Link to="/jugar/casa-mishi" className="cozy-rpg-btn cozy-rpg-btn--hero">
            🔄 Jugar de nuevo
          </Link>
          <Link to="/" className="cozy-rpg-btn cozy-rpg-btn--secondary">
            🏠 Volver a la portada
          </Link>
        </div>
      </div>
    </div>
  );
}
