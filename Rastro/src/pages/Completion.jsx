import React from "react";
import { Link } from "react-router-dom";
import PixelMishi from "../components/PixelMishi";
import PixelYosu from "../components/PixelYosu";
import PixelDecoration from "../components/PixelDecoration";

/**
 * pages/Completion.jsx
 * 
 * Pantalla final del juego.
 * Totalmente libre de emojis; ilustra el reencuentro de Mishi y Yosu
 * con los componentes PixelMishi y PixelYosu construidos en CSS puro.
 */
export default function Completion() {
  return (
    <div className="page page--completion">
      <div className="cozy-completion-card">
        {/* Decoraciones pixeladas de estrellas flotantes */}
        <div className="completion-decor-stars" aria-hidden="true">
          <PixelDecoration type="star" />
          <PixelDecoration type="sparkle" />
          <PixelDecoration type="star" />
        </div>

        {/* Título principal */}
        <h2 className="completion-title">Mishi y Yosu están juntos otra vez</h2>

        {/* Mensaje cálido de cierre */}
        <p className="completion-warm-message">
          El rastro de bigotes ha llegado a su fin. Después de una travesía llena de calma,
          recuerdos y puzzles por la habitación, los tejados y el jardín, Mishi y Yosu disfrutan
          nuevamente de la cálida brisa del atardecer juntos.
        </p>

        {/* Ilustración del reencuentro con PixelMishi y PixelYosu en CSS */}
        <div className="completion-cats-emblem" aria-label="Mishi y Yosu juntos y felices">
          <div className="cat-badge">
            <PixelMishi direction="right" size="medium" />
            <span className="cat-name">Mishi</span>
          </div>

          <div className="cats-reunion-bond" aria-hidden="true">
            <span className="bond-line" />
            <PixelDecoration type="sparkle" />
          </div>

          <div className="cat-badge">
            <PixelYosu size="medium" mood="happy" />
            <span className="cat-name">Yosu</span>
          </div>
        </div>

        {/* Botones de navegación final */}
        <div className="completion-actions-row">
          <Link to="/" className="cozy-btn cozy-btn--secondary">
            Volver al inicio
          </Link>

          <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
            Jugar de nuevo
          </Link>
        </div>
      </div>
    </div>
  );
}
