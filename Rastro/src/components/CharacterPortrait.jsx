import React from "react";

/**
 * components/CharacterPortrait.jsx
 * 
 * Retrato pixel art provisional para los cuadros de diálogo y escenas.
 * Construido enteramente mediante HTML y CSS puro (sin imágenes externas).
 * Representa a Mishi con su rostro gatuno, orejas pixeladas, ojos tiernos,
 * bigotes y su característico moño rosado.
 * 
 * @param {string} character Nombre del personaje (por defecto "Mishi").
 * @param {string} expression Expresión de Mishi ('sad', 'nostalgic', 'determined', etc.).
 * @param {string} size Tamaño del retrato ('small', 'medium', 'large').
 */
export default function CharacterPortrait({
  character = "Mishi",
  expression = "normal",
  size = "medium",
}) {
  return (
    <div
      className={`pixel-portrait pixel-portrait--${size}`}
      role="img"
      aria-label={`Retrato pixel art de ${character} con expresión ${expression}`}
    >
      <div className="pixel-cat-frame">
        {/* Orejitas pixeladas */}
        <div className="cat-pixel-ear cat-pixel-ear--left" />
        <div className="cat-pixel-ear cat-pixel-ear--right" />

        {/* Moño rosa característico */}
        <div className="cat-pixel-bow" title="Moño rosado de Mishi" />

        {/* Cabeza y rostro de Mishi */}
        <div className="cat-pixel-face">
          {/* Ojos pixelados */}
          <div className="cat-pixel-eyes">
            <span className={`pixel-eye ${expression === "sad" ? "pixel-eye--sad" : ""}`} />
            <span className={`pixel-eye ${expression === "sad" ? "pixel-eye--sad" : ""}`} />
          </div>

          {/* Naricita durazno */}
          <div className="cat-pixel-nose" />

          {/* Bigotitos laterales */}
          <div className="cat-pixel-whiskers cat-pixel-whiskers--left">
            <span />
            <span />
          </div>
          <div className="cat-pixel-whiskers cat-pixel-whiskers--right">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

