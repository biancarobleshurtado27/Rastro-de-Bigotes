import React from "react";
import { Link } from "react-router-dom";

/**
 * pages/Instructions.jsx
 * 
 * Guía de juego inspirada en un cuaderno de campo / diario de viaje acogedor.
 * Explica de forma tierna las mecánicas, los controles y la filosofía relajante
 * (sin combate, sin vidas, sin frustraciones).
 */
export default function Instructions() {
  return (
    <div className="page page--rpg-journal">
      <div className="cozy-journal-container">
        {/* Cabecera del Diario */}
        <header className="journal-header">
          <div className="journal-ribbon">📖 Notas de Viaje</div>
          <h1 className="journal-title">Diario de Aventuras de Mishi</h1>
          <p className="journal-subtitle">
            Consejos y observaciones para seguir el rastro de bigotes sin prisas.
          </p>
        </header>

        {/* Páginas del diario en pergamino cálido */}
        <div className="journal-pages-grid">
          {/* 1. Misión de Amor */}
          <div className="journal-card">
            <div className="journal-card__header">
              <span className="journal-card__stamp">🐾 01</span>
              <h3 className="journal-card__title">La Misión de Mishi</h3>
            </div>
            <p className="journal-card__text">
              Yosu ha desaparecido y Mishi ha decidido salir a buscarlo. A lo largo de tres zonas
              (la habitación, los tejados y el jardín de Yosu), deberás resolver pequeños puzzles
              de observación e interactuar con objetos nostálgicos para abrirte paso.
            </p>
          </div>

          {/* 2. Controles de exploración */}
          <div className="journal-card">
            <div className="journal-card__header">
              <span className="journal-card__stamp">🎮 02</span>
              <h3 className="journal-card__title">Cómo Mover a Mishi</h3>
            </div>
            <p className="journal-card__text">
              Puedes desplazarte tranquilamente por el mundo de dos maneras:
            </p>
            <ul className="journal-list">
              <li><strong>Teclado:</strong> Usa las flechas (⬅️ ⬆️ ⬇️ ➡️) o las teclas <code>W</code>, <code>A</code>, <code>S</code>, <code>D</code>.</li>
              <li><strong>Táctil / Pantalla:</strong> Botones grandes tipo consola retro pensados para teléfonos y pantallas pequeñas.</li>
              <li><strong>Clic en casillas:</strong> Haz clic en cualquier baldosa adyacente a Mishi para que camine hacia ella.</li>
            </ul>
          </div>

          {/* 3. Interacción */}
          <div className="journal-card">
            <div className="journal-card__header">
              <span className="journal-card__stamp">🔍 03</span>
              <h3 className="journal-card__title">Examinar Objetos</h3>
            </div>
            <p className="journal-card__text">
              Cuando te acerques a un objeto especial (camas, ovillos de lana, chimeneas, faroles o ventanas),
              aparecerá una burbuja flotante <strong>[E] Examinar</strong>. Presiona la barra espaciadora, la tecla <code>E</code> o el botón 🐾 en pantalla para descubrir recuerdos y pistas.
            </p>
          </div>

          {/* 4. Filosofía Cozy y Cero Frustración */}
          <div className="journal-card journal-card--highlight">
            <div className="journal-card__header">
              <span className="journal-card__stamp">🌸 04</span>
              <h3 className="journal-card__title">Filosofía Relajante (Cozy)</h3>
            </div>
            <ul className="journal-list">
              <li><strong>Sin vidas ni muerte:</strong> No hay enemigos, monstruos, combates ni pantallas de derrota.</li>
              <li><strong>Reintentos infinitos:</strong> Si te atascas, puedes reiniciar la habitación cuantas veces desees.</li>
              <li><strong>Botón de pista cariñosa:</strong> En la barra superior encontrarás el botón <code>💡 ¿Pista?</code> que te brindará un susurro de ayuda cuando lo necesites.</li>
            </ul>
          </div>
        </div>

        {/* Muestra visual del D-pad acogedor */}
        <div className="journal-dpad-sample">
          <span className="dpad-sample-badge">Vista previa de controles táctiles:</span>
          <div className="sample-dpad-visual">
            <span className="sample-btn">⬆️</span>
            <div className="sample-row">
              <span className="sample-btn">⬅️</span>
              <span className="sample-btn sample-btn--paw">🐾</span>
              <span className="sample-btn">➡️</span>
            </div>
            <span className="sample-btn">⬇️</span>
          </div>
        </div>

        {/* Llamada a la acción al pie */}
        <div className="journal-footer-action">
          <Link to="/jugar/casa-mishi" className="cozy-rpg-btn cozy-rpg-btn--hero">
            🐾 ¡Comenzar el viaje en la Casa de Mishi!
          </Link>
        </div>
      </div>
    </div>
  );
}
