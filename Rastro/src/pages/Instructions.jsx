import React from "react";
import { Link } from "react-router-dom";

/**
 * pages/Instructions.jsx
 * 
 * Página de instrucciones didáctica y acogedora.
 * Explica las reglas de exploración, controles por teclado y botones en pantalla,
 * la cuadrícula y la filosofía libre de derrota.
 */
export default function Instructions() {
  return (
    <div className="page page--instructions">
      <div className="cozy-guide-card">
        {/* Encabezado */}
        <header className="guide-header">
          <div className="guide-header__badge">📖 Guía del Jugador</div>
          <h2 className="guide-header__title">Cómo jugar a Rastro de Bigotes</h2>
          <p className="guide-header__subtitle">
            Una guía sencilla y tranquila para acompañar a Mishi en su travesía.
          </p>
        </header>

        {/* Bloques de Explicación Didácticos */}
        <div className="guide-grid">
          {/* Misión */}
          <div className="guide-section">
            <div className="guide-section__icon-badge">🎯</div>
            <h3 className="guide-section__title">1. La Misión de Mishi</h3>
            <p className="guide-section__text">
              La protagonista es <strong>Mishi</strong>, quien ha decidido salir a buscar a su pareja, <strong>Yosu</strong>.
              El juego se desarrolla a lo largo de <strong>tres mapas</strong>: la Casa de Mishi, los techos y el vecindario, y finalmente la Casa de Yosu.
            </p>
          </div>

          {/* Cuadrícula y Movimiento */}
          <div className="guide-section">
            <div className="guide-section__icon-badge">🗺️</div>
            <h3 className="guide-section__title">2. Movimiento en la Cuadrícula</h3>
            <p className="guide-section__text">
              El jugador se moverá casilla por casilla en una cuadrícula:
            </p>
            <ul className="guide-list">
              <li><strong>En computadora:</strong> Usa las <strong>flechas del teclado</strong> (⬅️ ⬆️ ⬇️ ➡️) o las teclas <code>W</code>, <code>A</code>, <code>S</code>, <code>D</code>.</li>
              <li><strong>En pantallas táctiles:</strong> Dispondrás de <strong>botones de movimiento en pantalla</strong> grandes y cómodos.</li>
            </ul>
          </div>

          {/* Interacción */}
          <div className="guide-section">
            <div className="guide-section__icon-badge">🐾</div>
            <h3 className="guide-section__title">3. Acercarse e Interactuar</h3>
            <p className="guide-section__text">
              Para resolver los misterios, debes acercarte a los objetos decorativos (muebles, ventanas, ovillos, huellas)
              e interactuar con ellos para descubrir pistas que te permitirán desbloquear el paso al siguiente mapa.
            </p>
          </div>

          {/* Filosofía Cozy */}
          <div className="guide-section guide-section--cozy">
            <div className="guide-section__icon-badge">🌸</div>
            <h3 className="guide-section__title">4. Una Experiencia Tranquila</h3>
            <ul className="guide-list">
              <li><strong>Sin vidas ni derrota:</strong> No existe "Game Over", muertes ni límites de tiempo.</li>
              <li><strong>Reintentos libres:</strong> Los puzzles pueden intentarse nuevamente tantas veces como desees.</li>
              <li><strong>Sistema de pistas:</strong> Si te quedas atascado durante un tiempo, aparecerá un botón de pista para orientarte con cariño.</li>
            </ul>
          </div>
        </div>

        {/* Resumen del objetivo */}
        <div className="guide-footer-callout">
          <p className="callout-text">
            ✨ El único objetivo es disfrutar de una aventura tranquila, cálida y resolver los puzzles a tu propio ritmo.
          </p>

          {/* Botón Comenzar juego */}
          <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
            🐾 Comenzar juego
          </Link>
        </div>
      </div>
    </div>
  );
}
