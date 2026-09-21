import React from "react";

/**
 * components/PixelYosu.jsx
 * 
 * Ilustración pixel art de Yosu construida con HTML y CSS puro.
 * No utiliza emojis ni imágenes externas.
 * 
 * Características:
 * - Silueta felina distinta a Mishi.
 * - Pelaje en tonos azul grisáceo y lavanda suave.
 * - Pecho y patitas en crema suave.
 * - Ojos grandes amables y bigotitos.
 * - Collar con medallón dorado.
 * 
 * @param {string} size 'small', 'medium', 'large'
 * @param {string} mood 'resting', 'happy', 'normal'
 * @param {string} className Clases adicionales
 */
export default function PixelYosu({
  size = "medium",
  mood = "normal",
  className = "",
}) {
  return (
    <div
      className={`pixel-yosu pixel-yosu--${size} pixel-yosu--${mood} ${className}`}
      role="img"
      aria-label="Yosu, el gato de pelaje azul grisáceo y expresión amable"
    >
      {/* Sombra base */}
      <div className="py-shadow" aria-hidden="true" />

      {/* Cola de Yosu */}
      <div className="py-tail" aria-hidden="true" />

      {/* Cuerpo y patitas */}
      <div className="py-body" aria-hidden="true">
        <div className="py-chest" />
        <div className="py-paw py-paw--left" />
        <div className="py-paw py-paw--right" />
      </div>

      {/* Collar de Yosu con medallón */}
      <div className="py-collar" aria-hidden="true">
        <span className="py-collar__band" />
        <span className="py-collar__bell" />
      </div>

      {/* Cabeza de Yosu */}
      <div className="py-head" aria-hidden="true">
        {/* Orejitas */}
        <div className="py-ear py-ear--left">
          <div className="py-ear__inner" />
        </div>
        <div className="py-ear py-ear--right">
          <div className="py-ear__inner" />
        </div>

        {/* Rostro y expresión */}
        <div className="py-face">
          <div className="py-eyes">
            <span className="py-eye py-eye--left">
              <span className="py-eye__pupil" />
              <span className="py-eye__shine" />
            </span>
            <span className="py-eye py-eye--right">
              <span className="py-eye__pupil" />
              <span className="py-eye__shine" />
            </span>
          </div>

          <div className="py-nose" />

          {/* Bigotes */}
          <div className="py-whiskers py-whiskers--left">
            <span />
            <span />
          </div>
          <div className="py-whiskers py-whiskers--right">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

