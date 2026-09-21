import React from "react";

/**
 * components/PixelMishi.jsx
 * 
 * Ilustración pixel art de Mishi construida 100% con HTML y CSS puro.
 * No utiliza emojis ni imágenes externas.
 * 
 * Elementos anatómicos:
 * - Cabeza cuadrada pixelada.
 * - Orejitas con interior rosa pastel.
 * - Ojos grandes expresivos.
 * - Nariz pequeña y bigotitos finos.
 * - Moño rosado icónico.
 * - Cuerpo pequeño con patitas y cola.
 * - Sombra elíptica pixelada en la base.
 * 
 * @param {string} direction 'up', 'down', 'left', 'right'
 * @param {boolean} isMoving Si Mishi está dando un paso
 * @param {string} size 'small', 'medium', 'large'
 * @param {string} className Clases adicionales
 */
export default function PixelMishi({
  direction = "down",
  isMoving = false,
  size = "medium",
  className = "",
}) {
  return (
    <div
      className={`pixel-mishi pixel-mishi--${direction} pixel-mishi--${size} ${
        isMoving ? "pixel-mishi--moving" : ""
      } ${className}`}
      role="img"
      aria-label={`Mishi mirando hacia ${
        direction === "up"
          ? "arriba"
          : direction === "down"
          ? "abajo"
          : direction === "left"
          ? "la izquierda"
          : "la derecha"
      }`}
    >
      {/* Sombra base en el suelo */}
      <div className="pm-shadow" aria-hidden="true" />

      {/* Cola de Mishi */}
      <div className="pm-tail" aria-hidden="true" />

      {/* Cuerpo y patitas */}
      <div className="pm-body" aria-hidden="true">
        <div className="pm-paw pm-paw--left" />
        <div className="pm-paw pm-paw--right" />
      </div>

      {/* Cabeza de Mishi */}
      <div className="pm-head" aria-hidden="true">
        {/* Orejitas */}
        <div className="pm-ear pm-ear--left">
          <div className="pm-ear__inner" />
        </div>
        <div className="pm-ear pm-ear--right">
          <div className="pm-ear__inner" />
        </div>

        {/* Moño rosado de Mishi */}
        <div className="pm-ribbon" title="Moño de Mishi">
          <div className="pm-ribbon__knot" />
          <div className="pm-ribbon__loop pm-ribbon__loop--l" />
          <div className="pm-ribbon__loop pm-ribbon__loop--r" />
        </div>

        {/* Rasgos faciales (solo visibles si no mira hacia arriba) */}
        {direction !== "up" && (
          <div className="pm-face">
            {/* Ojos pixelados */}
            <div className="pm-eyes">
              <span className="pm-eye pm-eye--left">
                <span className="pm-eye__pupil" />
                <span className="pm-eye__shine" />
              </span>
              <span className="pm-eye pm-eye--right">
                <span className="pm-eye__pupil" />
                <span className="pm-eye__shine" />
              </span>
            </div>

            {/* Nariz */}
            <div className="pm-nose" />

            {/* Bigotes */}
            <div className="pm-whiskers pm-whiskers--left">
              <span />
              <span />
            </div>
            <div className="pm-whiskers pm-whiskers--right">
              <span />
              <span />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

