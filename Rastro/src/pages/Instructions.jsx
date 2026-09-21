import React from "react";
import { Link } from "react-router-dom";

/**
 * pages/Instructions.jsx
 * 
 * Guía de juego didáctica y acogedora.
 * Libre de emojis; utiliza estilos tipográficos y diseño retro pixel-art.
 */
export default function Instructions() {
  return (
    <div className="page page--instructions">
      <div className="cozy-guide-card">
        {/* Encabezado */}
        <header className="guide-header">
          <div className="guide-header__badge">Guía del Jugador</div>
          <h2 className="guide-header__title">Cómo jugar a Rastro de Bigotes</h2>
          <p className="guide-header__subtitle">
            Una guía sencilla y tranquila para acompañar a Mishi en su travesía.
          </p>
        </header>

        {/* Bloques de Explicación Didácticos */}
        <div className="guide-grid">
          {/* Misión */}
          <div className="guide-section">
            <span className="guide-section__number">01</span>
            <h3 className="guide-section__title">La Misión de Mishi</h3>
            <p className="guide-section__text">
              La protagonista es <strong>Mishi</strong>, quien ha decidido salir a buscar a su pareja, <strong>Yosu</strong>.
              El juego se desarrolla a lo largo de <strong>tres mapas</strong>: la Casa de Mishi, los techos y el vecindario, y finalmente la Casa de Yosu.
            </p>
          </div>

          {/* Cuadrícula y Movimiento */}
          <div className="guide-section">
            <span className="guide-section__number">02</span>
            <h3 className="guide-section__title">Movimiento en la Cuadrícula</h3>
            <p className="guide-section__text">
              El jugador se moverá casilla por casilla en una cuadrícula:
            </p>
            <ul className="guide-list">
              <li><strong>En computadora:</strong> Usa las <strong>flechas del teclado</strong> (Arriba, Abajo, Izquierda, Derecha) o las teclas <code>W</code>, <code>A</code>, <code>S</code>, <code>D</code>.</li>
              <li><strong>En pantallas táctiles:</strong> Dispones de <strong>botones direccionales en pantalla</strong> grandes y cómodos.</li>
            </ul>
          </div>

          {/* Interacción */}
          <div className="guide-section">
            <span className="guide-section__number">03</span>
            <h3 className="guide-section__title">Acercarse e Interactuar</h3>
            <p className="guide-section__text">
              Para resolver los misterios, debes acercarte a los objetos decorativos (muebles, ventanas, ovillos, huellas)
              e interactuar con ellos para descubrir pistas que te permitirán desbloquear el paso al siguiente mapa.
            </p>
          </div>

          {/* Filosofía Cozy */}
          <div className="guide-section guide-section--cozy">
            <span className="guide-section__number">04</span>
            <h3 className="guide-section__title">Una Experiencia Tranquila</h3>
            <ul className="guide-list">
              <li><strong>Sin vidas ni derrota:</strong> No existe "Game Over", muertes ni límites de tiempo.</li>
              <li><strong>Reintentos libres:</strong> Los puzzles pueden intentarse nuevamente tantas veces como desees.</li>
              <li><strong>Sistema de pistas:</strong> Si te quedas atascado durante un tiempo, aparecerá un botón de pista para orientarte con cariño.</li>
            </ul>
          </div>
        </div>

        {/* Resumen del objetivo y llamada a la acción */}
        <div className="guide-footer-callout">
          <p className="callout-text">
            El único objetivo es disfrutar de una aventura tranquila, cálida y resolver los puzzles a tu propio ritmo.
          </p>

          {/* Botón Comenzar juego */}
          <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
            Comenzar juego
          </Link>
        </div>
      </div>
    </div>
  );
}
