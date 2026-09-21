import React from "react";
import { Link } from "react-router-dom";
import PixelCard from "../components/PixelCard";

/**
 * pages/Instructions.jsx
 * 
 * Página didáctica que explica las reglas, controles y filosofía
 * relajante del juego "Rastro de Bigotes".
 */
export default function Instructions() {
  return (
    <div className="page page--instructions">
      <section className="instructions-header">
        <h1 className="retro-page-title">📜 Cómo Jugar</h1>
        <p className="retro-page-subtitle">
          Guía para ayudar a Mishi a seguir el rastro y reencontrarse con Yosu.
        </p>
      </section>

      <div className="instructions-grid">
        {/* Objetivo principal */}
        <PixelCard title="🎯 Misión de Amor" variant="pink">
          <p>
            Mishi debe resolver pequeños puzzles de lógica y entorno en cada una de las tres zonas
            (Casa de Mishi, Techos del vecindario y Casa de Yosu) para desbloquear el camino
            hacia su querido amigo Yosu.
          </p>
        </PixelCard>

        {/* Controles de movimiento */}
        <PixelCard title="🎮 Controles y Movimiento" variant="blue">
          <p>Puedes guiar a Mishi por la cuadrícula utilizando dos métodos cómodos:</p>
          <ul className="instruction-list">
            <li>
              <strong>⌨️ Teclado:</strong> Usa las <strong>flechas de dirección</strong> (⬅️ ⬆️ ⬇️ ➡️) o las teclas <code>W</code>, <code>A</code>, <code>S</code>, <code>D</code>.
            </li>
            <li>
              <strong>📱 En pantalla:</strong> Controles táctiles con botones en pantalla pensados para teléfonos o quienes prefieran el ratón.
            </li>
          </ul>
        </PixelCard>

        {/* Interacción con objetos */}
        <PixelCard title="🔍 Interacción con el Entorno" variant="cream">
          <p>
            Mishi debe acercarse a los objetos clave (ovillos de lana, ventanas, cajas, palancas)
            e interactuar con ellos presionando la barra espaciadora o el botón <strong>"Interactuar"</strong>.
          </p>
          <p>
            ¡Cada objeto puede revelar un bigote caído, una pista o abrir un pasaje secreto!
          </p>
        </PixelCard>

        {/* Filosofía Cozy / Relajante */}
        <PixelCard title="🌸 Sin Estrés: Experiencia Relajante" variant="lilac">
          <ul className="instruction-list">
            <li>
              <strong>💖 Sin vidas ni derrota:</strong> No hay cronómetros agresivos ni pantallas de "Game Over".
            </li>
            <li>
              <strong>🔄 Intentos infinitos:</strong> Si un puzzle no sale a la primera, puedes reiniciar la habitación o reintentarlo tranquilamente.
            </li>
            <li>
              <strong>💡 Sistema de pistas:</strong> Si pasas un tiempo sin avanzar en un puzzle, aparecerá automáticamente una pequeña huella brillante con un consejo.
            </li>
          </ul>
        </PixelCard>
      </div>

      {/* D-Pad de muestra visual */}
      <section className="controls-preview-section">
        <PixelCard title="Vista previa de los botones en pantalla" variant="cream">
          <div className="dpad-preview-container">
            <p className="dpad-description">
              En la pantalla de juego dispondrás de botones grandes y accesibles como estos:
            </p>

            <div className="virtual-dpad">
              <div className="dpad-row">
                <button type="button" className="retro-dpad-btn" disabled>⬆️</button>
              </div>
              <div className="dpad-row">
                <button type="button" className="retro-dpad-btn" disabled>⬅️</button>
                <button type="button" className="retro-dpad-btn dpad-action" disabled>🐾</button>
                <button type="button" className="retro-dpad-btn" disabled>➡️</button>
              </div>
              <div className="dpad-row">
                <button type="button" className="retro-dpad-btn" disabled>⬇️</button>
              </div>
            </div>
          </div>
        </PixelCard>
      </section>

      {/* Botón de llamada a la acción */}
      <div className="instructions-footer">
        <Link to="/jugar/casa-mishi" className="retro-btn retro-btn--primary retro-btn--large">
          🐾 ¡Todo listo, empecemos a jugar!
        </Link>
      </div>
    </div>
  );
}

